import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/MainLayout'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>Welcome!</div>,
      },
      {
        path: '/events',
        element: <div>Events</div>,
      },
      {
        path: `/events/new`,
        element: <div>New Event</div>,
      },
      {
        path: `/events/:eventId`,
        element: <div>Event Details</div>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
