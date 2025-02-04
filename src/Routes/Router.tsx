import ErrorPage from "@/components/ErrorPage/ErrorPage";
import MainLayout from "@/components/Layouts/MainLayouts";
import About from "@/Pages/About/About";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
