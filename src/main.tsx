import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Event from '@pages/events/Event'
import Events from '@pages/events/Events'
import Index from '@pages/Index'
import NewEvent from '@pages/events/NewEvent'
import ErrorPage from '@components/errors/ErrorPage'
import App from '@components/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: `/events/new`,
        element: <NewEvent />,
      },
      {
        path: `/events/:eventId`,
        element: <Event />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
