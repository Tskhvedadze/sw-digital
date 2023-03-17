import { useState, useEffect } from 'react'

const useDataFetch = (url, size, page) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const newData = await response.json()

                if (newData.list && newData.list.length === 0) {
                    setIsLoading(false)
                }

                if (response.ok) {
                    setData((prevData) => [...prevData, ...newData.list])
                    setError(false)
                } else {
                    throw new Error(newData.message || 'Something Went Wrong')
                }
            } catch (err) {
                console.error('Error', err.message)
                setError(true)
            }
        }
        if (isLoading) {
            fetchData()
        }
    }, [size, page])

    return { data, isLoading, error }
}

export default useDataFetch
