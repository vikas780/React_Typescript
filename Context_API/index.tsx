import { useCounter } from './context'
function Component() {
  const context = useCounter()

  return (
    <div>
      <h2>Context API</h2>
      <h3>Count: {context?.value}</h3>
      <button
        className='btn btn-center'
        onClick={() => context?.setCount(context.value + 1)}
      >
        Increment
      </button>
    </div>
  )
}
export default Component
