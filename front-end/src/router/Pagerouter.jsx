import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Public from "../pages/public/Public";
import Cat from "../pages/Cat";
import Error404 from "../components/Error404";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import About from "../About";
import Detail from "../pages/Detail";
import Rewardadd from "../components/Rewardadd";
function Pagerouter() {
  const categories = ["art", "crafts", "dance", "film", "music", "technology"];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Public />,
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
      path: "/categories/:cat",
      element: <Cat categories={categories} />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
    {
      path:"/aboutus",
      element:<About/>
    },
    {
      path:"/detail",
      element:<Detail/>
    },
    {
      path:"/company/addproduct",
      element:<Rewardadd/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Pagerouter;