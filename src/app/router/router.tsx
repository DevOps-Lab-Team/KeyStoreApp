import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes.tsx";

const Router = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router}/>;
};

export default Router;
