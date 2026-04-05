# Backend

Express API server for the WS06 React blog app. The frontend is a React SPA built with Vite — the backend no longer serves HTML pages.

## How it works

- All browser routes are handled client-side by the React app.
- In production mode the server serves the built React app from `frontend/solution/dist` as a static SPA.
- All data routes live under `/api/posts`.

## Quick start

```bash
npm install
# create a .env file with MONGODB_URI=<your Atlas connection string>
npm run dev
```

Build the frontend first if you want Express to serve it:

```bash
cd ../frontend/solution && npm run build
```

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/posts` | Return all posts, newest first |
| `GET` | `/api/posts/:id` | Return a single post |
| `POST` | `/api/posts` | Create a post — body: `{ title, content, author }` |
| `PUT` | `/api/posts/:id` | Update a post |
| `DELETE` | `/api/posts/:id` | Delete a post |

**Success / error codes**

| Situation | Status |
|-----------|--------|
| Created | `201` |
| OK | `200` |
| Validation error | `400` |
| Invalid ObjectId | `400` |
| Not found | `404` |
| Server error | `500` |

## Suggested test body

```json
{
  "title": "My First Blog Post",
  "content": "This API stores blog posts in MongoDB.",
  "author": "Student"
}
```
