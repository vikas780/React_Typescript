import { createContext, useContext, useState } from 'react'

type counterProp = {
  children: React.ReactNode
}

// Now i want to add count, setCount to value so let's make an interface
interface CounterContextValue {
  value: number
  setCount: (num: number) => void
}

const counterContext = createContext<CounterContextValue | null>(null)

export const useCounter = () => {
  return useContext(counterContext)
}

export const CounterProvide: React.FC<counterProp> = (props) => {
  const [count, setCount] = useState<number>(0)

  return (
    <counterContext.Provider
      value={{
        value: count,
        setCount,
      }}
    >
      {props.children}
    </counterContext.Provider>
  )
}
