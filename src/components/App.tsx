import { Outlet } from 'react-router'
import Loader from './loaders/Loader'
import useLoading from '@hooks/useLoading'
import { ErrorBoundary } from 'react-error-boundary'
import NotificationContext from '@context/NotificationContext'
import useNotification from '@hooks/useNotification'
import Notification from './notifications/Notification'
import LoaderContext from '@context/LoaderContext'
import ErrorPage from './errors/ErrorPage'

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
