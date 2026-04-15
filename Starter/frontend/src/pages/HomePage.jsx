import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard.jsx'

// TODO (student): Fetch all posts from the backend and render them.
// Suggested steps:
// 1) Keep local state for posts, loading, and error.
// 2) In useEffect, call GET /api/posts.
// 3) Show loading and error states.
// 4) Map posts into PostCard components.
function HomePage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://ws06-react-blog.onrender.com/api/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts from server')
        }
        return response.json()
      })
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="status-msg">Loading posts…</p>
  if (error) return <p className="status-msg error">{error}</p>

  return (
    <div className="blog-page">
      <div className="page-heading">
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">All posts</h1>
        <p className="page-copy">
          Read the latest blog posts below.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="status-msg">No posts yet. Be the first to write one!</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HomePage