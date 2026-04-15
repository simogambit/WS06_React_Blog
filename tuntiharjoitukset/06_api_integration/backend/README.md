# 06 – API Integration: Backend

A minimal Express REST API for the notes app. Uses an **in-memory array** as the data store — no database setup required. Data resets on every server restart; the focus is on the API contract and route structure, not persistence.

## Running

```bash
npm install
npm run dev      # node --watch server.js (auto-restarts on file changes)
# or
npm start        # node server.js (no auto-restart)
```

Server starts on **http://localhost:3001**.

## REST API

| Method | Path | Body | Status | Description |
|--------|------|------|--------|-------------|
| GET | `/api/notes` | — | 200 | Return all notes, newest first |
| GET | `/api/notes/:id` | — | 200 / 404 | Return a single note |
| POST | `/api/notes` | `{ title, body }` | 201 / 400 | Create a note |
| PUT | `/api/notes/:id` | `{ title?, body? }` | 200 / 400 / 404 | Update a note |
| DELETE | `/api/notes/:id` | — | 204 / 404 | Delete a note |

### Example requests

```bash
# List all notes
curl http://localhost:3001/api/notes

# Get one note
curl http://localhost:3001/api/notes/1

# Create a note
curl -X POST http://localhost:3001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My note","body":"Hello from curl"}'

# Update a note
curl -X PUT http://localhost:3001/api/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated title"}'

# Delete a note
curl -X DELETE http://localhost:3001/api/notes/1
```

## Note shape

```json
{
  "id": 1,
  "title": "What is API integration?",
  "body": "API integration means connecting two systems...",
  "createdAt": "2026-04-10T09:00:00.000Z"
}
```

## Project structure

```
backend/
├── package.json    # dependencies: express, cors
└── server.js       # all routes and in-memory data in one file
```

## CORS

CORS is configured to allow requests from `http://localhost:5177` (the Vite frontend). In development the **Vite proxy** already avoids cross-origin requests, so the CORS middleware is mainly there as a reference for how it would be configured in production.
