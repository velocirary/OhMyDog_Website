import { Column } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarDays } from 'lucide-react'

import { useDateFilter } from '@/context/data-filter-context'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Separator } from './ui/separator'

interface DataTableToolbarDatePickerProps<TData, TValue> {
  column?: Column<TData, TValue>
  className?: string
}

export function DataTableToolbarDatePicker<TData, TValue>({
  column,
  className,
}: DataTableToolbarDatePickerProps<TData, TValue>) {
  const { date, setDate } = useDateFilter()

  function handleDateChange(selectedDate: Date | undefined) {
    setDate(selectedDate)
    column?.setFilterValue(selectedDate)
  }

  function handleRemoveDate() {
    setDate(undefined)
    column?.setFilterValue(undefined)
  }

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
            ) : (
              <span>Selecione uma data</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            selected={date}
            onSelect={handleDateChange}
          />

          {/* Clear filter button */}
          {date && (
            <>
              <Separator />

              <div className="overflow-hidden p-1 text-xs font-medium text-muted-foreground">
                <Button
                  variant={'ghost'}
                  size={'sm'}
                  onClick={handleRemoveDate}
                  className="h-8 w-full"
                >
                  Remover filtro
                </Button>
              </div>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
