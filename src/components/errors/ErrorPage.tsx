import { useRouteError } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/20/solid'

interface ErrorPageProps {
  error?: Error
}

interface RouteError {
  error: Error
  statusText: string
  status: number
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const routerError = useRouteError() as RouteError
  const errorMessage = error?.message || routerError?.error?.message
  console.error(errorMessage)

  return (
    <div className="absolute inset-0 m-auto max-h-fit max-w-2xl rounded-md bg-red-50 p-4 shadow-lg">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Sorry, an unexpected error has occurred.
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
