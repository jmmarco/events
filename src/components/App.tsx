
import { Outlet } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import LoaderContext from '../context/LoaderContext'
import NotificationContext from '../context/NotificationContext'
import useLoading from '../hooks/useLoading'
import useNotification from '../hooks/useNotification'
import ErrorPage from './errors/ErrorPage'
import Loader from './loaders/Loader'
import Notification from './notifications/Notification'


export default function App() {
  const loadingValue = useLoading()
  const notificationValue = useNotification()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, info) => {
        console.log(`[Boundary]`, error, info)
      }}
    >
      <NotificationContext.Provider value={notificationValue}>
        <LoaderContext.Provider value={loadingValue}>
          <Outlet />
          <Loader />
          <Notification />
        </LoaderContext.Provider>
      </NotificationContext.Provider>
    </ErrorBoundary>
  )
}
