## What is this?

A simple minimal repro demonstrating the change in behaviour of @libsql/client 0.6.0 compare to 0.5.6

## Issue

Previously, 0.5.6 seemed to automatically cause next to revalidate GET request routes.

With 0.6.0, that is no longer the case and revalidation must be forced.

To demonstrate, follow the below, and then switch out 0.6.0 for 0.5.6 and repeat.

## Getting Started

```bash
# start turso dev server
turso dev

# install packages
npm install

# initialise the db
npm run drizzle-kit push:sqlite

# add a data row to the db, e.g. id = 1, title = 'hello'

# start the server
npm run dev

# send a curl get request to the posts api route
curl http://localhost:3000/api/posts

```
