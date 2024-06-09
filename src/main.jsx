import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Features from './pages/Features.jsx'
import OurClinics from './pages/OurClinics.jsx'
import Locker from './pages/Locker.jsx'
import Tracking from './pages/Tracking.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />
      },
      {
        path: "/our-clinics",
        element: <OurClinics />
      },
      {
        path: "/health-tracking",
        element: <Tracking/>
      },
      {
        path: "/locker",
        element: <Locker />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
