// AJAX & APIs - Google Books (Exercises 1-3).
// Run in the browser (or Node 18+). Examples:
//   fetchBook("isbn", 9780575087057)  -> The Name of the Wind
//   fetchBook("title", "The Wise Man's Fears")

function fetchBook(queryType, queryValue) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${encodeURIComponent(queryValue)}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log("API error:", data.error.message);
        return;
      }
      if (!data.items) {
        console.log("No books found");
        return;
      }
      // Exercise 3: print title, author and ISBN for each book in items
      data.items.forEach((item) => {
        const info = item.volumeInfo;
        const title = info.title;
        const authors = (info.authors || ["Unknown author"]).join(", ");
        const isbn = (info.industryIdentifiers || [])
          .map((id) => id.identifier)
          .join(", ");
        console.log(`${title} — ${authors} — ISBN: ${isbn}`);
      });
    })
    .catch((err) => console.log("Request failed:", err.message));
}

// example calls
fetchBook("isbn", 9780575087057);
fetchBook("title", "How to Win Friends and Influence People");

if (typeof module !== "undefined") module.exports = { fetchBook };
