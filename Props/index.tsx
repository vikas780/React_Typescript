import React from 'react'

type Compprops = {
  name: string
  id: number
  children?: React.ReactNode
}

//function Component(props:Compprops)  to acess use props.name

function Component({ name, id, children }: Compprops) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <p>Name: {name}</p>
      <p>Id: {id}</p>
      <p>Children Props: {children}</p>
      <h2>Props</h2>
    </div>
  )
}
export default Component
