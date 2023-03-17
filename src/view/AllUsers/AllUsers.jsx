import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import useHandleScroll from '../../hooks/useHandleScroll'
import useDataFetch from '../../hooks/useDataFetch'

import { Card, Loading, Wrapper, Error } from '../../components'

import './AllUsers.scss'

function AllUsers() {
    const { handleScroll, page, size } = useHandleScroll()
    const { data, isLoading, error } = useDataFetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`,
        size,
        page,
    )

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {error ? (
                <Error />
            ) : (
                <Wrapper>
                    {data.map((content, index) => {
                        const imageUrl = `${content.imageUrl}?${index}`
                        const contentID = `${content.id}?${index}`
                        return (
                            <NavLink
                                className='nav'
                                to={`/user/${index + 1}`}
                                key={contentID}
                            >
                                <Card {...content} imageUrl={imageUrl} />
                            </NavLink>
                        )
                    })}
                </Wrapper>
            )}
            {isLoading && !error && <Loading />}
        </>
    )
}

export default AllUsers
