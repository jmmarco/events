import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import ErrorPage from './components/errors/ErrorPage'
import Event from './pages/events/Event'
import NewEvent from './pages/events/NewEvent'
import Events from '@pages/events/Events'
import Index from '@pages/Index'


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
