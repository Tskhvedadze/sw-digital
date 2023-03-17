import { NavLink } from 'react-router-dom'

import useDataFetching from '../../hooks/useDataFetching'

import { Card, Loading, Wrapper, Error } from '../../components'

import './AllUsers.scss'

function AllUsers() {
    const { data, isLoading, error } = useDataFetching()

    return (
        <>
            {error && <Error />}
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
            {isLoading && <Loading />}
        </>
    )
}

export default AllUsers
