import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import BestSellerBooks from "../home/BestSellerBooks";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/best-seller-books",
        element: <BestSellerBooks />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/book/${params.id}`),
      },
    ],
  },
  {
    path:"/admin/dashboard",
    element:<DashboardLayout/>,
    children:[
      {
        path:"/admin/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/admin/dashboard/upload",
        element:<UploadBook/>
      },
      {
        path:"/admin/dashboard/manage",
        element:<ManageBooks/>
      },
      {
        path:"/admin/dashboard/edit-books/:id",
        element:<EditBooks/>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/book/${params.id}`),
      }
    ]
  }
]);

export default router;
