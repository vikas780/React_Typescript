import { useState } from 'react'

type Link = {
  id: number
  url: string
  text: string
}
const navLinks: Link[] = [
  { id: 1, url: 'Some Url', text: 'one' },
  { id: 2, url: 'Some Url', text: 'two' },
  { id: 3, url: 'Some Url', text: 'three' },
]

function Component() {
  const [count, setCount] = useState<number>(0)
  const [list, setList] = useState<string[]>([])
  const [links, setLinks] = useState<Link[]>(navLinks)

  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <h3 className='mb-1 btn-center'>{count}</h3>
      <h3 className='mb-1 btn-center'>{list}</h3>
      <h3 className='mb-1 btn-center'>
        {links.map((li) => {
          return (
            <div key={li.id}>
              <p>{li.text}</p>
            </div>
          )
        })}
      </h3>
      <button
        className='btn btn-center'
        onClick={() => {
          setCount(count + 1)
          setList(['Vikas', 'Dhiman'])
          setLinks([...links, { id: 4, url: 'hello', text: 'Four' }])
        }}
      >
        Click me
      </button>
    </div>
  )
}
export default Component
