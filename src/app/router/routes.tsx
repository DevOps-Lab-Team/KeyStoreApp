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
        path: "home",
        async lazy() {
          const { HomePage } = await import("@/pages/home");
          return { Component: HomePage };
        },
      }
    ]
  }
];

export default routes;
