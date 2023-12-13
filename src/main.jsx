import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider'
import { ParallaxProvider } from 'react-scroll-parallax';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ParallaxProvider>
        <RouterProvider router={Routes} />
      </ParallaxProvider>
    </AuthProvider>
  </React.StrictMode>,
)
