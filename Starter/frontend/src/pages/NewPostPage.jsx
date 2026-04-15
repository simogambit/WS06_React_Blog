import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm.jsx'

// TODO (student): Implement create flow (POST /api/posts).
// Suggested steps:
// 1) Read form values in handleSubmit.
// 2) POST JSON body to /api/posts.
// 3) On success, navigate to /posts/:id.
// 4) Show an error message on failure.
function NewPostPage() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      // 1) Read form values
      const formData = new FormData(e.target)
      const newPost = Object.fromEntries(formData.entries())

      // 2) POST JSON body to /api/posts
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })

      if (!response.ok) {
        // Otetaan kiinni backendin lähettämä virheilmoitus (esim. liian lyhyt otsikko)
        const errData = await response.json()
        throw new Error(errData.error || 'Failed to create post')
      }

      const savedPost = await response.json()

      // 3) On success, navigate to /posts/:id
      navigate(`/posts/${savedPost._id}`)
    } catch (err) {
      // 4) Show an error message on failure
      setError(err.message)
      setSubmitting(false)
    }
  }

  return (
    <div>
      <h1 className="page-title">New post</h1>
      {error && <p className="status-msg error">{error}</p>}
      <PostForm onSubmit={handleSubmit} submitting={submitting} />
    </div>
  )
}

export default NewPostPage