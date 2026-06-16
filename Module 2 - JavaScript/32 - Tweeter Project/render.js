// VIEW - renders posts to the DOM. Knows nothing about data logic.
const Renderer = function () {
  function commentHtml(comment) {
    return `
      <div class="comment" data-id="${comment.id}">
        <span class="comment-text">${comment.text}</span>
        <span class="delete-comment" data-id="${comment.id}">x</span>
      </div>`;
  }

  function postHtml(post) {
    const comments = post.comments.map(commentHtml).join("");
    return `
      <div class="post" data-id="${post.id}">
        <div class="post-text">${post.text}</div>
        <div class="delete" data-id="${post.id}">Delete Post</div>
        <div class="comments">${comments}</div>
        <input type="text" placeholder="Got something to say?" class="comment-input">
        <button class="comment-button">Comment</button>
      </div>`;
  }

  function renderPosts(posts) {
    $("#posts").empty(); // clear first so we don't duplicate
    posts.forEach((post) => $("#posts").append(postHtml(post)));
  }

  return { renderPosts };
};
