import './App.css'
import Home from './Home'
import Card from './components/Card';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cat from './pages/Cat';
import Othercomponent from './Othercomponent';
function App() {
  const categories = ['cat1', 'cat2', 'cat3','cat4','cat5'];
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/category/:cat",
      element:<Cat categories={categories}/>,
    },
    {
      path:"/card",
      element:<Card/>
    },
    {path:"/other",
    element:<Othercomponent/>
  }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
    
  )
}

export default App
