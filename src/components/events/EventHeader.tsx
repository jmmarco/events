import Button from '@components/buttons/Button'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { EventActionType } from '@pages/events/Event'

interface EventHeaderProps {
  headingTitle: string
  buttonActionText?: EventActionType
  buttonCloseHandleClick?: () => void
  buttonActionHandleClick?: () => void
}

export default function EventHeader({
  headingTitle,
  buttonActionText,
  buttonCloseHandleClick,
  buttonActionHandleClick,
}: EventHeaderProps) {
  return (
    <header className="mx-auto border-b border-secondary bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex h-[66px] items-center">
        {buttonCloseHandleClick && (
          <Button
            type="button"
            intent="secondary"
            className="ml-auto border-0 p-2 hover:bg-transparent"
            onClick={buttonCloseHandleClick}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5 text-primary" aria-hidden="true" />
          </Button>
        )}
      </div>

      <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
        <div className="mx-auto flex h-[165px] max-w-3xl items-center justify-between shadow-none">
          <h1 className="text-[40px] font-bold">{headingTitle}</h1>
          {buttonActionText && (
            <Button
              onClick={buttonActionHandleClick}
              className="capitalize"
              type="button"
              intent="secondary"
              size="small"
            >
              {buttonActionText}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
