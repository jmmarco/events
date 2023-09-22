import { useRouteError } from 'react-router-dom'
import Layout from './MainLayout'
import { XCircleIcon } from '@heroicons/react/20/solid'

export default function ErrorPage() {
  const error: unknown = useRouteError()
  console.error(error)

  return (
    <Layout>
      <div className="mx-auto mt-10 max-w-2xl rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Sorry, an unexpected error has occurred.
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                {(error as Error)?.message ||
                  (error as { statusText?: string })?.statusText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
