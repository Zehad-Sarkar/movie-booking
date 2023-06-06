import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Main from "./components/Main.jsx";
import ViewDetails from "./components/Movie/ViewDetails.jsx";
import MovieDetails from "./components/Movie/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/form/:id",
        element: <MovieDetails></MovieDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
