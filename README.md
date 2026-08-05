# TravelBharat Frontend

React and Vite frontend for the TravelBharat tourism platform.

## Commands

```bash
npm install
npm run dev:full
```

`dev:full` starts both the Vite website and the local Express API. Use `npm run build` to create the production build and `npm run lint` to check code quality.

## Private admin settings

Create `server/.env` from `server/.env.example`, then provide your own values for `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `JWT_SECRET`. This file is ignored by Git and must not be shared.
