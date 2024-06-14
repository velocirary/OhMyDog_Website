import { FieldError } from 'react-hook-form'

import { cn } from '@/lib/utils'

interface ErrorMessageProps {
  error?: FieldError
  placeholder: string
}

export function ErrorMessage({ error, placeholder }: ErrorMessageProps) {
  return (
    <span
      className={cn(
        'mt-4 block font-karla text-sm font-medium',
        error ? 'text-red-500' : 'text-zinc-500',
      )}
    >
      {error ? error.message : placeholder}
    </span>
  )
}
