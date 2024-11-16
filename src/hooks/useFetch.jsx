import { useState } from 'react'
import axios from 'axios'

function useFetch () {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function dataFetch ({ url, method = 'get', id = null, body = null }) {
    setLoading(true)

    url = `${url}${id ? `/${id}/` : ''}`
    method = method.toUpperCase() // GET, POST, PUT|PATCH, DELETE
    body = method !== 'GET' ? body : null

    const options = {
      url,
      method,
      data: body
    }

    try {
      setError(null)
      const response = await axios(options)
      const resData = response.data

      switch (method) { // GET, POST, PUT|PATCH, DELETE
        case 'POST':
          setData((prev) => [...prev, resData])
          break
        case 'PUT':
        case 'PATCH':
          setData(prev => prev.map(item => item.id === id ? resData : item))
          break
        case 'DELETE':
          setData(prev => prev.filter((item) => item.id !== id))
          break
        default:
          setData(resData)
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }

  }

  return [data, dataFetch, loading, error]
}

export default useFetch