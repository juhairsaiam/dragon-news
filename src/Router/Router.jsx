import { createBrowserRouter } from "react-router";
import HomeLayout from "../Loyout/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CatagoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "/about",
        element: <h1>about</h1>,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("../../demo-data/news.json"),
      },
    ],
  },

  {
    path: "/*",
    element: <h3>error 404</h3>,
  },
]);

export default router;
