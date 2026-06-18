// Model - grabs the data from the 4 APIs and combines it into one clean object.
class RUPGService {
  // fetch all 4 APIs in parallel, then shape the data the way the View needs it
  async getRandomUserPage() {
    const [users, quote, pokemon, about] = await Promise.all([
      this.fetchUsers(),
      this.fetchQuote(),
      this.fetchPokemon(),
      this.fetchAbout(),
    ]);

    const [main, ...friends] = users; // first user is the main one, the other 6 are friends

    return {
      main: {
        firstName: main.name.first,
        lastName: main.name.last,
        city: main.location.city,
        state: main.location.state,
        picture: main.picture.large,
      },
      friends: friends.map(({ name, picture }) => ({
        firstName: name.first,
        lastName: name.last,
        picture: picture.medium,
      })),
      quote,
      pokemon,
      about,
    };
  }

  // 7 random users, limited to US/UA/DE
  async fetchUsers() {
    const res = await fetch("https://randomuser.me/api/?results=7&nat=us,ua,de");
    if (!res.ok) throw new Error("Couldn't load users");
    const { results } = await res.json();
    return results;
  }

  // a random Kanye West quote
  async fetchQuote() {
    const res = await fetch("https://api.kanye.rest/");
    if (!res.ok) throw new Error("Couldn't load the quote");
    const { quote } = await res.json();
    return quote;
  }

  // a random pokemon. I love pokemon, so I added a 50/50 chance it comes out shiny :)
  async fetchPokemon() {
    const id = Math.ceil(Math.random() * 1025); // 1025 pokemon exist
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Couldn't load the pokemon");

    const { name, sprites } = await res.json();
    const isShiny = Math.random() < 0.5;
    const art = sprites.other["official-artwork"];
    const image = isShiny ? art.front_shiny ?? sprites.front_shiny : art.front_default ?? sprites.front_default;

    return { name, image, isShiny };
  }

  // "meaty" filler text for the About Me section
  async fetchAbout() {
    const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=2");
    if (!res.ok) throw new Error("Couldn't load the about text");
    const paragraphs = await res.json();
    return paragraphs.join("\n\n");
  }
}
