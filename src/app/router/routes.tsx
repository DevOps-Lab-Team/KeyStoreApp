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
    path: "admin",
    async lazy() {
      const { AdminLayout } = await import("@/layouts/admin");
      return { Component: AdminLayout };
    },
    children: [
      {
        path: "games",
        async lazy() {
          const { GamesListPage } = await import("@/pages/admin/games/views/list");
          return { Component: GamesListPage };
        }
      },
      {
        path: "games/:id",
        async lazy() {
          const { GameUpdatePage } = await import("@/pages/admin/games/views/update");
          return { Component: GameUpdatePage };
        }
      },
      {
        path: "games/create",
        async lazy() {
          const { GameCreatePage } = await import("@/pages/admin/games/views/create");
          return { Component: GameCreatePage };
        }
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />
  }
];

export default routes;
