import { useState } from 'react'

function useHandleScroll() {
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(0)

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

    return { handleScroll, page, size }
}

export default useHandleScroll
