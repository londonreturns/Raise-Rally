import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cat from "../pages/Cat";
import Error404 from "../components/Error404";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import About from "../About";
import Detail from "../pages/Detail";
import Rewardadd from "../components/Rewardadd";
import Productadd from "../components/Productadd";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";
import Addimage from "../components/Addimage";
import Trial from "../components/Trial";
import Dashboard from "../pages/admin/Dashboard";
import CompanyPerformance from "../pages/admin/CompanyPerfomance";
import ProfileUpdate_admin from "../pages/admin/ProfileUpdate_admin";
import ProductDashboard from "../pages/admin/ProductDashboard";
import Product_Moderate from "../pages/admin/Product_Moderate";
import Company_Moderate from "../pages/admin/Company_Moderate";

function Pagerouter() {
  const categories = ["art", "crafts", "dance", "film", "music", "technology"];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/categories/:cat",
      element: <Cat categories={categories} />
    },
    {
      path: "/categories/:cat/detail",
      element: <Detail />
    },
    {
      path: "*",
      element: <Error404 />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Registration />
    },
    {
      path: "/aboutus",
      element: <About />
    },
    {
      path: "/detail",
      element: <Detail />
    },
    {
      path: "/company/addproduct",
      element: <Productadd />
    },
    {
      path: "/company/addreward",
      element: <Rewardadd />
    },
    {
      path: "/company/addimage",
      element: <Addimage />
    },
    {
      path: "/try",
      element: <Trial />
    },
    {
      path: "/admin/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/admin/dashboard",
          element: <CompanyPerformance />
        },
        {
          path: "/admin/dashboard/editprofile",
          element: <ProfileUpdate_admin />
        },
        {
          path: "/admin/dashboard/editproduct",
          element: <Product_Moderate />
        },
        {
          path: "/admin/dashboard/editcompany",
          element: <Company_Moderate />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Pagerouter;
