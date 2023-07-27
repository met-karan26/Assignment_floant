import React from 'react'
import "./App.css";
import Home from './pages/Home';
import Cartpage from './pages/Cartpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/' ,element:<Home />,
  },
  {
    path:'/carts' ,element:<Cartpage />,
  },
])
const App = () => {
  return (

    <div>
      <RouterProvider router={router} />
     
     
    </div>
  )
}

export default App