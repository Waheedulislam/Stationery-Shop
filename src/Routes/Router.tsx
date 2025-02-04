import ErrorPage from "@/components/ErrorPage/ErrorPage";
import MainLayout from "@/components/Layouts/MainLayouts";
import About from "@/Pages/About/About";
import Contact from "@/Pages/Contact/Contact";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import Home from "@/Pages/Home/Home";
import Product from "@/Pages/Product/Product";
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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
