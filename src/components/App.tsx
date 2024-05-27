import { Outlet } from 'react-router'
import Loader from './loaders/Loader'
import useLoading from '@hooks/useLoading'
import { ErrorBoundary } from 'react-error-boundary'
import Notification from './notifications/Notification'
import LoaderContext from '@context/LoaderContext'
import ErrorPage from './errors/ErrorPage'
import NotificationProvider from '@context/NotificationProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App() {
  const queryClient = new QueryClient()

  const loadingValue = useLoading()

  return (
    <QueryClientProvider client={queryClient}>
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
            <ReactQueryDevtools initialIsOpen={false} />
            <Notification />
          </LoaderContext.Provider>
        </NotificationProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
