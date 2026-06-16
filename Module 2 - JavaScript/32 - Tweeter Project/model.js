// MODEL - all data logic for Tweeter. Knows nothing about the UI.
const Tweeter = function () {
  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't worry second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 2; // p1, p2 already exist
  let commentIdCounter = 6; // c1..c6 already exist

  const getPosts = () => posts;

  const addPost = (text) => {
    postIdCounter++;
    posts.push({ text, id: "p" + postIdCounter, comments: [] });
  };

  const removePost = (postID) => {
    const index = posts.findIndex((p) => p.id === postID);
    if (index !== -1) posts.splice(index, 1);
  };

  const addComment = (postID, text) => {
    const post = posts.find((p) => p.id === postID);
    if (post) {
      commentIdCounter++;
      post.comments.push({ id: "c" + commentIdCounter, text });
    }
  };

  const removeComment = (postID, commentID) => {
    const post = posts.find((p) => p.id === postID);
    if (post) {
      const index = post.comments.findIndex((c) => c.id === commentID);
      if (index !== -1) post.comments.splice(index, 1);
    }
  };

  return { getPosts, addPost, removePost, addComment, removeComment };
};

if (typeof module !== "undefined") module.exports = Tweeter;
