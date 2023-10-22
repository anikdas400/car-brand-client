import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import AddProduct from './Product/AddProduct.jsx';
import MyCart from './Product/MyCart.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';
import UpdateCar from './Product/UpdateCar.jsx';
import Details from './Product/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/cars')
        
      },
      {
        path:'/updatecar/:id',
        element:<UpdateCar></UpdateCar>,
        loader: ({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
        
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: ({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
        
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
