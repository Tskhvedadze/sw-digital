import { useState, useEffect } from 'react'

const useDataFetching = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(0)
    const [stopLoad, setStopLoad] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleScroll = () => {
        const scrollTop = Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop,
        )
        const scrollHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight,
        )
        const clientHeight = document.documentElement.clientHeight
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            setPage((prevPage) => prevPage + 1)
            setSize((prevSize) => prevSize + 1)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(false)
                setIsLoading(true)
                const response = await fetch(
                    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`,
                )
                const newData = await response.json()
                if (newData.list && newData.list.length === 0) {
                    setIsLoading(false)
                    setStopLoad(true)
                }
                if (!stopLoad) {
                    setData((prevData) => [...prevData, ...newData.list])
                }
                setIsLoading(false)
            } catch (err) {
                console.error('Error fetching data')
                setError(true)
                setIsLoading(false)
            }
        }
        if (!stopLoad) {
            fetchData()
        }
    }, [page, size, stopLoad])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { data, isLoading, error }
}

export default useDataFetching
