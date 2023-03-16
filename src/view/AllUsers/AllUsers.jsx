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
                        <Card
                            key={contentID}
                            {...content}
                            imageUrl={imageUrl}
                        />
                    )
                })}
            </Wrapper>
            {isLoading && <Loading />}
        </>
    )
}

export default AllUsers
