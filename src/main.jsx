import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import Home from './Pages/Home/Home'
import ColorGrid from './Components/colors/Colors'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'

import Services from './Pages/Services/Services'
import About from './Pages/About/About'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Router/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/projects',
        element:<Projects/>
      },
{
      path:'/about',
      element:<About/>
    },
    
{
      path:'/services',
      element:<Services/>
    },
      {
        path:'/colors',
        element:<ColorGrid/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
