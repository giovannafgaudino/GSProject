import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRoter, RouterProvider, Link } from 'react-router-dom'

import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx'
import Login from './Pages/Login/Login.jsx'
import Contato from './Pages/Contato/Contato.jsx'

import './index.css'

const router = createBrowserRoter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: 'sobre',
      element: <Sobre />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'contato',
      element: <Contato />
    },
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
