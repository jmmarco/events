import { Outlet } from 'react-router'
import { ChildrenProps } from '../types/global'
import Loader from './Loader'
import LoaderContext from '../context/LoaderContext'
import useLoading from '../hooks/useLoading'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './ErrorPage'

export default function Layout({ children }: ChildrenProps) {
  const value = useLoading()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, info) => {
        console.log(`[Boundary]`, error, info)
      }}
    >
      <div className="relative h-full text-circle-grey-shade-dark">
        <LoaderContext.Provider value={value}>
          {children}
          <Outlet />
          <Loader />
        </LoaderContext.Provider>
      </div>
    </ErrorBoundary>
  )
}
