import { Outlet } from 'react-router'
import Loader from './loaders/Loader'
import LoaderContext from '../context/LoaderContext'
import useLoading from '../hooks/useLoading'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './errors/ErrorPage'

export default function App() {
  const value = useLoading()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, info) => {
        console.log(`[Boundary]`, error, info)
      }}
    >
      <LoaderContext.Provider value={value}>
        <Outlet />
        <Loader />
      </LoaderContext.Provider>
    </ErrorBoundary>
  )
}
