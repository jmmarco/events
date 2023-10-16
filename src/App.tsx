import ErrorPage from '@components/errors/ErrorPage'
import Loader from '@components/loaders/Loader'
import Notification from '@components/notifications/Notification'
import LoaderContext from '@context/LoaderContext'
import NotificationContext from '@context/NotificationContext'
import useLoading from '@hooks/useLoading'
import useNotification from '@hooks/useNotification'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'

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
