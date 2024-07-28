import { useState } from 'react'

function Component() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange:', e.target.value)
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log('This is formData', formData)
    const data = Object.fromEntries(formData.entries())

    console.log(data)
    console.log('Name:', name)
    console.log('Email:', email)
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter name'
          name='name'
          className='form-input mb-1'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          className='form-input mb-1'
          name='email'
          placeholder='Enter email'
          value={email}
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Component
