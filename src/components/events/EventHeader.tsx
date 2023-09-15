import { XMarkIcon } from '@heroicons/react/20/solid'
import Button from '../buttons/Button'

export default function EventHeader() {
  return (
    <header className="bg-white border-b border-secondary mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center h-[66px]">
        <Button type="button" className="ml-auto p-[26px] pr-0">
          <XMarkIcon className="h-5 w-5 text-primary" aria-hidden="true" />
        </Button>
      </div>
      <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
        <div className="flex items-center h-[165px] max-w-3xl mx-auto justify-between">
          <h1 className="font-bold text-[40px]">Event form</h1>
          <Button
            type="button"
            className="capitalize border border-secondary py-2.5 px-[18px] rounded-md"
          >
            edit
          </Button>
        </div>
      </div>
    </header>
  )
}
