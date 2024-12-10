import "./App.css";
import Data from "./Pages/Data/Data";
import Home from "./Pages/Home/Home";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import NotFound from "./Pages/NotFound/NotFound";
import Layouts from "./Layouts/Layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layouts />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "data", element: <Data /> },
        { path: "product", element: <SingleProduct /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
