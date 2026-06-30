import { useState, useEffect } from 'react'

// Exercise 2 + 3 - fetch posts and lay them out, switching direction on resize
const Posts = () => {
  const [posts, setPosts] = useState([])
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 700)

  // Exercise 2 - grab the posts once when the component loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10))) // only the first 10
  }, [])

  // Exercise 3 - listen to the window resize and remember if we're on a small screen
  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth < 700)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize) // cleanup the listener
  }, [])

  return (
    <div className={isNarrow ? 'posts column' : 'posts row'}>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
