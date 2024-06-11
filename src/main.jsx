import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const Home = lazy(() => import('./pages/Home.jsx'))
const Features = lazy(() => import('./pages/Features.jsx'))
const OurClinics = lazy(() => import('./pages/OurClinics.jsx'))
const Locker = lazy(() => import('./pages/Locker.jsx'))
const Tracking = lazy(() => import('./pages/Tracking.jsx'))

import Loader from "./components/Loader.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<Loader />}><Home /></Suspense>,
      },
      {
        path: "/features",
        element: <Suspense fallback={<Loader />}><Features /></Suspense>
      },
      {
        path: "/our-clinics",
        element: <Suspense fallback={<Loader />}><OurClinics /></Suspense>
      },
      {
        path: "/health-tracking",
        element: <Suspense fallback={<Loader />}><Tracking /></Suspense>
      },
      {
        path: "/locker",
        element: <Suspense fallback={<Loader />}><Locker /></Suspense>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
