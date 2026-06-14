// Data Flow - one source of truth (the posts array), re-rendered on every change.

const posts = [
  { name: "Ron", text: "Hello world" },
  { name: "Maya", text: "Nice day" },
];

// draw all posts. empty() first so we don't duplicate the list each render.
function render() {
  $("#posts").empty();
  posts.forEach((post) => {
    $("#posts").append(
      `<div class="post"><strong>${post.name}</strong>: ${post.text}</div>`
    );
  });
}

$("#submit").on("click", function () {
  const name = $("#name").val();
  const text = $("#text").val();
  if (!name || !text) return;
  posts.push({ name, text }); // update the data...
  render(); // ...then re-render from the data
  $("#name").val("");
  $("#text").val("");
});

render();
