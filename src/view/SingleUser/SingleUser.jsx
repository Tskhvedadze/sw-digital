import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { FieldSet } from './fieldSet/FieldSet'
import FriendList from '../FriendList/FriendList'

import './SingleUser.scss'

function SingleUser() {
    const [singleUser, setSingleUser] = useState([])
    const { userID } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userID}`,
            )
            const newData = await response.json()
            setSingleUser([newData])
        }
        fetchData()
    }, [userID])

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
                    <a href={`${userID}`}>user</a>
                </div>
                <h2 className='container__body--title'>Friends:</h2>
                <FriendList userID={userID} />
            </div>
        </div>
    )
}

export default SingleUser
