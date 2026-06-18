// VIEW - turns the posts data into HTML. Only cares about rendering, nothing else.
const Renderer = function () {
  // html for a single comment (with its little delete x)
  const commentHtml = (comment) => `
    <div class="comment" data-id="${comment.id}">
      <span class="comment-text">${comment.text}</span>
      <span class="delete-comment" data-id="${comment.id}">×</span>
    </div>`;

  // html for one post: the text, a delete button, its comments, and an add-comment box
  const postHtml = (post) => `
    <div class="post" data-id="${post.id}">
      <div class="post-top">
        <p class="post-text">${post.text}</p>
        <span class="delete" data-id="${post.id}">Delete</span>
      </div>
      <div class="comments">${post.comments.map(commentHtml).join("")}</div>
      <div class="add-comment">
        <input type="text" placeholder="Got something to say?" class="comment-input">
        <button class="comment-button">Comment</button>
      </div>
    </div>`;

  // wipe the feed and draw every post again, called after each change.
  // i show newest first so a new post pops up on top, feels natural like real twitter.
  // i reverse a copy so the real array order stays the same.
  const renderPosts = (posts) => {
    $("#posts").empty();
    [...posts].reverse().forEach((post) => $("#posts").append(postHtml(post)));
  };

  return { renderPosts };
};
