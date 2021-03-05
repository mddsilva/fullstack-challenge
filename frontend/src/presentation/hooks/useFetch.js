import { useEffect, useState } from 'react'
import { AxiosHttpClient } from '@/infra/usecases/http'

const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await AxiosHttpClient.get(url)
        setData(data)
      } catch (e) {
        console.error(e)
        setError(false)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { loading, error, data }
}

export default useFetch
