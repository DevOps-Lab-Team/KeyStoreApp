import {RouteObject} from "react-router-dom";

// TODO add errorElement, loader
const routes: RouteObject[] = [
  {
    path: '/',
    errorElement: <>Error</>,
    loader: () => <>Загрузка</>,
    async lazy() {
      const { MainLayout } = await import("@/layouts/main");
      return { Component: MainLayout };
    },
    children: []
  }
];

export default routes;
