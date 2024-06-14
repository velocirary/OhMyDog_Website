import { createContext, ReactNode, useContext, useState } from 'react'

interface DateFilterType {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}

interface DateFilterProviderProps {
  children: ReactNode
}

const DateFilterContext = createContext({} as DateFilterType)

export function useDateFilter() {
  const context = useContext(DateFilterContext)

  if (!context) {
    throw new Error('You need an AuthContext to use this Context')
  }
  return context
}

export function DateFilterProvider({ children }: DateFilterProviderProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <DateFilterContext.Provider value={{ date, setDate }}>
      {children}
    </DateFilterContext.Provider>
  )
}
