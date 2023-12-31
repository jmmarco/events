import { Outlet } from 'react-router'
import Loader from './loaders/Loader'
import useLoading from '@hooks/useLoading'
import { ErrorBoundary } from 'react-error-boundary'
import Notification from './notifications/Notification'
import LoaderContext from '@context/LoaderContext'
import ErrorPage from './errors/ErrorPage'
import NotificationProvider from '@context/NotificationProvider'

export default function App() {
  const loadingValue = useLoading()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, info) => {
        console.log(`[Boundary]`, error, info)
      }}
    >
      <NotificationProvider>
        <LoaderContext.Provider value={loadingValue}>
          <Outlet />
          <Loader />
          <Notification />
        </LoaderContext.Provider>
      </NotificationProvider>
    </ErrorBoundary>
  )
}
