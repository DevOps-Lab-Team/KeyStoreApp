import { Navigate } from "react-router-dom";

import type { RouteObject } from "react-router-dom";

// TODO add errorElement, loader
const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <>Error</>,
    loader: () => <>Загрузка</>,
    async lazy() {
      const { MainLayout } = await import("@/layouts/main");
      return { Component: MainLayout };
    },
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import("@/pages/home");
          return { Component: HomePage };
        },
      },
      {
        path: "404",
        element: <h1>404</h1>
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />
  }
];

export default routes;
