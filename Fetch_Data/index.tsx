import { useEffect, useState } from 'react'
import { z } from 'zod'

// Zod used to check runtime checks
const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  price: z.string(),
})

type Tours = z.infer<typeof TourSchema>

const url = 'https://www.course-api.com/react-tours-project'
function Component() {
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [tour, setTour] = useState<Tours[]>([])

  async function fetchData(url: string) {
    setisLoading(true)
    try {
      const res = await fetch(url)
      const rawData: Tours[] = await res.json()
      const result = TourSchema.array().safeParse(rawData)
      if (!result.success) {
        throw new Error(`Invalid Data ${result.error}`)
      }
      setTour(result.data)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'There was an error...'
      console.log(message)
    } finally {
      setisLoading(false)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [])
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Fetch Data Tours</h2>

      {tour.map((tour) => {
        return (
          <p key={tour.id} className='mb-1'>
            {tour.name}
          </p>
        )
      })}
    </div>
  )
}
export default Component
