// Async/Await exercises (JSONPlaceholder API).
const BASE = "https://jsonplaceholder.typicode.com";

// ---------- Exercise 1: convert to async/await + try/catch ----------
async function getUserById(userId) {
  try {
    const response = await fetch(`${BASE}/users/${userId}`);
    if (!response.ok) throw new Error("User not found");
    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

// ---------- Exercise 2: user + their posts ----------
async function getUserWithPosts(userId) {
  try {
    const userRes = await fetch(`${BASE}/users/${userId}`);
    if (!userRes.ok) throw new Error("User not found");
    const user = await userRes.json();

    const postsRes = await fetch(`${BASE}/posts?userId=${userId}`);
    if (!postsRes.ok) throw new Error("Failed to fetch posts");
    const posts = await postsRes.json();

    return { user, posts };
  } catch (error) {
    console.error("Error fetching user with posts:", error.message);
    return null;
  }
}

// ---------- Exercise 3: dashboard (parallel fetch + aggregate) ----------
async function getDashboard() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch(`${BASE}/users`).then((r) => r.json()),
      fetch(`${BASE}/posts`).then((r) => r.json()),
      fetch(`${BASE}/comments`).then((r) => r.json()),
    ]);

    const summary = {
      totalUsers: users.length,
      totalPosts: posts.length,
      totalComments: comments.length,
      avgPostsPerUser: posts.length / users.length,
      avgCommentsPerPost: comments.length / posts.length,
    };

    const postsByUser = {};
    posts.forEach((p) => (postsByUser[p.userId] = (postsByUser[p.userId] || 0) + 1));

    const postToUser = {};
    posts.forEach((p) => (postToUser[p.id] = p.userId));
    const commentsByUser = {};
    comments.forEach((c) => {
      const uid = postToUser[c.postId];
      if (uid) commentsByUser[uid] = (commentsByUser[uid] || 0) + 1;
    });

    const topUsers = users
      .map((u) => ({
        name: u.name,
        postCount: postsByUser[u.id] || 0,
        commentCount: commentsByUser[u.id] || 0,
      }))
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    const recentPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 5);

    return { summary, topUsers, recentPosts };
  } catch (error) {
    console.error("Error building dashboard:", error.message);
    return null;
  }
}

// ---------- run ----------
(async () => {
  console.log("--- Exercise 1 ---");
  await getUserById(1); // valid
  await getUserById(999); // invalid

  console.log("\n--- Exercise 2 ---");
  const data = await getUserWithPosts(1);
  console.log(`User ${data.user.name} has ${data.posts.length} posts`);

  console.log("\n--- Exercise 3 ---");
  const dashboard = await getDashboard();
  console.log("summary:", dashboard.summary);
  console.log("topUsers:", dashboard.topUsers);
  console.log("recentPosts ids:", dashboard.recentPosts.map((p) => p.id));
})();
