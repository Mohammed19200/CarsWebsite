import "./App.css";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Layouts from "./Layouts/Layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cars from "./Pages/Cars/Cars";
import CarDetails from "./Pages/CarDetails/CarDetails";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layouts />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "cars", element: <Cars /> },
        { path: "car-details", element: <CarDetails /> },
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
