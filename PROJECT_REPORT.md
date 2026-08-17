# TravelBharat — Detailed Project Report

## 1. Project overview

TravelBharat is a responsive tourism discovery web application focused on Indian States and Union Territories. It helps users browse places to visit, find destinations by state or category, and view useful travel information before planning a trip.

## 2. Objectives

- Make Indian tourist destinations easy to discover.
- Provide state-wise browsing, search, and category filters.
- Show practical destination details such as timings, entry fee, best time to visit, images, maps, and nearby attractions.
- Provide a secure administrator workflow for managing destination records.

## 3. Main features

- Home page with tourism discovery content.
- State and Union Territory listing with individual state pages.
- Search for a place, state, or category.
- Category browsing: Heritage, Nature, Religious, and Adventure.
- Destination detail pages with a gallery, travel details, nearby attractions, and Google Maps directions.
- Responsive layout for desktop and mobile screens.
- Administrator login protected with JWT authentication.
- Admin dashboard to add, update, publish, and delete destination content.
- Local API persistence for administrator-managed destinations.

## 4. Technology used

| Area | Technology |
| --- | --- |
| Frontend | React 19, Vite, React Router, CSS |
| Backend API | Node.js, Express |
| Authentication | JWT, bcryptjs |
| UI enhancement | Framer Motion, React Icons |
| Development data storage | JSON file |

## 5. Application workflow

1. A visitor opens the home page and explores states, categories, or search.
2. The visitor opens a destination to view its travel information and map link.
3. An administrator signs in with configured private credentials.
4. The administrator creates, edits, verifies, or deletes destination records from the dashboard.
5. Only verified administrator-created destinations are exposed on the public API.

## 6. Project structure

- `src/` — React pages, components, context, styling, and destination data.
- `public/images/` — Destination image assets.
- `server/server.js` — Express API and JWT-protected admin routes.
- `server/data.json` — Development data storage for admin-managed destinations.
- `server/.env.example` — Template for private administrator settings.

## 7. Quality checks

The following checks were completed successfully:

```bash
npm run lint
npm run build
```

## 8. Running the project locally

```bash
npm install
copy server\\.env.example server\\.env
npm run dev:full
```

The frontend runs at `http://localhost:5173` and the API runs at `http://localhost:3001`.

## 9. Security considerations

- Administrator email, password, and JWT secret are kept in a private `.env` file.
- The private `.env` file is excluded from version control.
- Password validation uses bcrypt hashing.
- Admin API routes require a valid JWT.

## 10. Future improvements

- Deploy the frontend and API as separate hosted services.
- Replace JSON development storage with MongoDB or PostgreSQL for production.
- Add user accounts, saved trips, reviews, and booking integrations in later phases.

## Conclusion

TravelBharat delivers the required tourism discovery and secure content-management features in a responsive React application. It is ready for deployment and internship evaluation.
