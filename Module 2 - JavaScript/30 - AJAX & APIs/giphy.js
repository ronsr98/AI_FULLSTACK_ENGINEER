// AJAX & APIs - GIPHY gif generator (Exercises 4-5).
// Get a free API key at https://developers.giphy.com/dashboard/ and paste it below.
const API_KEY = "YOUR_GIPHY_API_KEY";

function searchGif(query) {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${API_KEY}&limit=1`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const gif = data.data[0]; // first result
      const gifDiv = document.getElementById("gif");
      if (!gif) {
        gifDiv.textContent = "No gif found";
        return;
      }
      // embed_url works inside an iframe (like an img src)
      gifDiv.innerHTML = `<iframe src="${gif.embed_url}" width="400" height="300"></iframe>`;
    })
    .catch((err) => console.log("Request failed:", err.message));
}

document.getElementById("search").addEventListener("click", () => {
  const query = document.getElementById("query").value;
  if (query) searchGif(query);
});
