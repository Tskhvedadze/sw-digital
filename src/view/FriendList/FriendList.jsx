import { useEffect } from 'react'

import useDataFetch from '../../hooks/useDataFetch'
import useHandleScroll from '../../hooks/useHandleScroll'

import { Card, Wrapper, Loading, Error } from '../../components'

function FriendList({ userID }) {
    const { handleScroll, page, size } = useHandleScroll()
    const { data, isLoading, error } = useDataFetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userID}/friends/${page}/${size}`,
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
                    {data &&
                        data.map((friends, index) => {
                            const imageUrl = `${friends.imageUrl}?${index}`
                            const contentID = `${friends.id}?${index}`
                            return (
                                <Card
                                    key={contentID}
                                    {...friends}
                                    imageUrl={imageUrl}
                                />
                            )
                        })}
                </Wrapper>
            )}
            {isLoading && !error && <Loading />}
        </>
    )
}

export default FriendList
