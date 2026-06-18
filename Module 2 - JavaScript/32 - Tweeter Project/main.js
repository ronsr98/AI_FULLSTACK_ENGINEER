// CONTROLLER - connects the model (Tweeter) and the view (Renderer), handles clicks.
const tweeter = Tweeter();
const renderer = Renderer();

// the golden rule of data flow: change the data, then re-render from it
const refresh = () => renderer.renderPosts(tweeter.getPosts());

// new post - the Twit button is static so a normal listener is fine
$("#twit").on("click", () => {
  const text = $("#input").val().trim();
  if (!text) return;
  tweeter.addPost(text);
  $("#input").val("");
  refresh();
});

// posts/comments are created dynamically, so we delegate these from #posts

$("#posts").on("click", ".delete", function () {
  tweeter.removePost($(this).data("id"));
  refresh();
});

$("#posts").on("click", ".comment-button", function () {
  const post = $(this).closest(".post");
  const text = post.find(".comment-input").val().trim();
  if (!text) return;
  tweeter.addComment(post.data("id"), text);
  refresh();
});

$("#posts").on("click", ".delete-comment", function () {
  const postID = $(this).closest(".post").data("id");
  tweeter.removeComment(postID, $(this).data("id"));
  refresh();
});

refresh(); // first render of the dummy data
