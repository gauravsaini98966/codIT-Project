# codIT

A coding academy landing page — Front End, UI/UX, Backend, Mobile App, and
Full Stack Development courses. Black / white / green theme with 3D tilt
interactions built with Next.js (App Router) + Tailwind CSS, backed by a
small Node/Express API.

## Structure

```
codit-nextjs/
├── app/               # Next.js App Router (pages, layout, global styles)
├── components/        # Navbar, Hero, Courses, Why, LearningPath,
│                       Reviews, Enroll, FAQ, Footer
├── server/            # Standalone Node/Express API (courses + enroll)
├── tailwind.config.ts
└── package.json
```

## Run the frontend

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Run the backend API

```bash
cd server
npm install
npm run dev
```

Runs at http://localhost:4000 with:

- `GET  /api/courses` — list all courses
- `GET  /api/courses/:id` — get one course
- `POST /api/enroll` — submit `{ email, courseId? }` to book a demo

The "Book Free Demo" form on the site calls this API. Copy `.env.example` to
`.env.local` if you want to point the frontend at a different API URL:

```bash
cp .env.example .env.local
```

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google`.
- The hero course-stack and course cards use pointer-driven 3D tilt (CSS
  `transform-style: preserve-3d` + JS), respecting `prefers-reduced-motion`
  is a good next enhancement if you want to harden accessibility further.
- Swap the in-memory arrays in `server/index.js` for MongoDB/Postgres when
  you're ready to persist real enrollments.
