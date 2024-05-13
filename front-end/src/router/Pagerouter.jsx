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

function Pagerouter() {
  const categories = ["art", "crafts", "dance", "film", "music", "technology"];
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path: "/categories/:cat",
      element: <Cat categories={categories} />,

    },
    {
      path: "/categories/:cat/detail",
      element: <Detail />,
    }
    ,
    {
      path: "*",
      element: <Error404 />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Registration />,
    },

    {
      path: "/aboutus",
      element: <About />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/company/addproduct",
      element: <Productadd />,
    },
    {
      path: "/company/addreward",
      element: <Rewardadd />,
    },
    {
      path: "/company/addimage",
      element: <Addimage />,
    },
    {
      path: "/try",
      element: <Trial />,
    }, 
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Pagerouter;
