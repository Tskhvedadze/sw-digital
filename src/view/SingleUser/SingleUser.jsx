import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import useDataFetch from '../../hooks/useDataFetch'
import useHandleScroll from '../../hooks/useHandleScroll'

import { Card, Wrapper, Error, Loading } from '../../components'
import { FieldSet } from './fieldSet/FieldSet'

import './SingleUser.scss'

function SingleUser() {
    const [singleUser, setSingleUser] = useState([])
    const param = useParams()

    const { handleScroll, page, size } = useHandleScroll()
    const { data, isLoading, error } = useDataFetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${param.id}/friends/${page}/${size}`,
        size,
        page,
    )

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${param.id}`,
            )
            const newData = await response.json()
            setSingleUser([newData])
        }
        fetchData()
    }, [param])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='container'>
            <div className='container__header'>
                {singleUser &&
                    singleUser.map((user) => {
                        return <FieldSet key={user.id} {...user} />
                    })}
            </div>
            <div className='container__body'>
                <div className='container__body--links'>
                    <a href={`${param.id}`}>user</a>
                </div>
                <h2 className='container__body--title'>Friends:</h2>
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
            </div>
        </div>
    )
}

export default SingleUser
