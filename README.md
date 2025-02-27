# Social Media Mock

This project is a simple social media application built with Next.js and React, featuring three main routes: feed, profile, and post. It uses a mock server with `json-server` to simulate a backend API.

## Project Structure

```
social-media-mock/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── post/[slug]
│   │   │   └── page.tsx
│   │   ├── profile
│   │   │   └── page.tsx
│   ├── components/
│   │   └── ... (reusable components)
│   └── types/
│       └── ... (typescript types)
├── db.json
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

* **`src/app/`**: Holds the Next.js pages, which define the application's routes.
    * `page.tsx`: Displays a list of friends' posts.
    * `post/[slug]/page.tsx`: Displays a single post based on the `id` parameter.
    * `profile/page.tsx`: Shows the user's profile information.
* **`src/components/`**: Contains reusable React components.
* **`src/types/`**: Contains TypeScript type definitions.
* **`db.json`**: Mock database for `json-server`.
* **`package.json`**: Project dependencies and scripts.
* **`postcss.config.js`**: PostCSS configuration for Tailwind CSS.
* **`tailwind.config.js`**: Tailwind CSS configuration.
* **`tsconfig.json`**: TypeScript configuration.

## Routes

2.  **`/`**: (feed) Lists posts from friends.
1.  **`/profile`**: Displays the user's profile information.
3.  **`/post/:id`**: Displays a specific post based on the `id` parameter.

## Mock Server

The project uses `json-server` to simulate a backend API.

* The mock data is stored in `db.json`.
* To start the mock server, run: `npm run dev:server`

## Dependencies

* **`next`**: React framework for server-side rendering and routing.
* **`react`**: JavaScript library for building user interfaces.

## Dev Dependencies

* **`concurrently`**: Runs next and json-server at the same time.
* **`eslint`**: TypeScript linter for code quality.
* **`json-server`**: Mock REST API server.
* **`postcss`**: CSS transformation tool.
* **`tailwindcss`**: Utility-first CSS framework.
* **`typescript`**: JavaScript superset for static typing.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:L0y3r/social-network-mock.git
    cd social-media-mock
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server and mock server concurrently:**

    ```bash
    npm run dev
    ```

4.  **Open your browser and navigate to `http://localhost:3000`**.
