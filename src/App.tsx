import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home"
import Product from "./pages/Products/Product"
import Users from "./pages/Users/users";
import Login from "./pages/Login/login"
import "./styles/global.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout=()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">

          <div className="menuContainer">
          <Menu/>
          </div>
          <div className="contentContainer">

            <Outlet/>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
        path: "/",
        element: <Home/>,
      
      },
      {
        path: "/products",
        element: <Product/>,

      },
      {
        path: "/users",
        element: <Users/>,

      }]
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]
  );

  return (

    
   <RouterProvider router={router} />
  )
}

export default App
