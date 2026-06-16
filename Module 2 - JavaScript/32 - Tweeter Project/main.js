// CONTROLLER - connects Model and View, handles user events.
const tweeter = Tweeter();
const renderer = Renderer();

function refresh() {
  renderer.renderPosts(tweeter.getPosts());
}

// New post (the main Twit button - a static element)
$("#twit").on("click", function () {
  const text = $("#input").val();
  if (!text) return;
  tweeter.addPost(text);
  $("#input").val("");
  refresh();
});

// The following targets are created dynamically, so we use event delegation on #posts.

// Delete a post
$("#posts").on("click", ".delete", function () {
  const postID = $(this).data("id");
  tweeter.removePost(postID);
  refresh();
});

// Add a comment
$("#posts").on("click", ".comment-button", function () {
  const post = $(this).closest(".post");
  const postID = post.data("id");
  const text = post.find(".comment-input").val();
  if (!text) return;
  tweeter.addComment(postID, text);
  refresh();
});

// Delete a comment
$("#posts").on("click", ".delete-comment", function () {
  const postID = $(this).closest(".post").data("id");
  const commentID = $(this).data("id");
  tweeter.removeComment(postID, commentID);
  refresh();
});

// initial render
refresh();
