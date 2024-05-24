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
import Dashboardbacker from "../pages/backer/Dashboardbacker";
import BackerDashboard from "../pages/backer/BackerDashboard";
import ProfileUpdate_backer from "../pages/backer/ProfileUpdate_backers";
import Companyproducts from "../components/Companyproducts";
import CompanyDashboard from "../pages/company/CompanyDashboard";
import ProfileUpdate_company from "../pages/company/ProfileUpdate_company";
import Myproducts from "../pages/company/Myproducts";
import { Navigate } from "react-router-dom";
function Pagerouter() {
  const user=localStorage.getItem("userType");
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
      path: "/company/:company", 
      element: <Companyproducts />
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
      path: "/try",
      element: <Trial/>
    },
    {
      path: "/admin/dashboard",
      element: user === "admin" ? <Dashboard /> : <Navigate to="/login" replace />,
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
    },
    {

      path: "/backer/dashboard",
      element: user === "backers" ? <Dashboardbacker/> : <Navigate to="/login" replace />,
      children: [
        {
          path: "/backer/dashboard",
          element:<BackerDashboard/>
        },
        {
          path: "/backer/dashboard/editprofile",
          element: <ProfileUpdate_backer/>
        },
        {
          path:"/backer/dashboard/funded",
          element:<BackerDashboard/>
        }
      ]
    },
    {
      path: "/company/dashboard",
      element: user === "company" ? <CompanyDashboard/> : <Navigate to="/login" replace />,
      children: [
        {
          path: "/company/dashboard",
          element:<Myproducts/>
        },
        {
          path: "/company/dashboard/editprofile",
          element: <ProfileUpdate_company/>
        },
        {
          path: "/company/dashboard/addproduct",
          element: <Productadd />
        },
        {
          path: "/company/dashboard/addreward",
          element: <Rewardadd />
        },
        {
          path: "/company/dashboard/addimage",
          element: <Addimage />
        },
        {
          path: "/company/dashboard/myproducts",
          element: <Myproducts/>
        },
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
