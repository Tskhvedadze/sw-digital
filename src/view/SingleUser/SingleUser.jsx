import { useState, useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'

import { FieldSet } from './fieldSet/FieldSet'

import './SingleUser.scss'

function SingleUser() {
    const [data, setData] = useState([])
    const param = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${param.id}`,
            )
            const newData = await response.json()
            setData([newData])
        }

        fetchData()
    }, [param])

    return (
        <div className='container'>
            <div className='container__header'>
                {data &&
                    data.map((user) => {
                        return <FieldSet key={user.id} {...user} />
                    })}
            </div>
            <div className='container__body'>
                <div className='container__body--links'>
                    {/* <a href={`${param.id}`}>user</a> */}
                    <NavLink to={`/${param.id}`}>user</NavLink>
                </div>
                <h2 className='container__body--title'>Friends:</h2>
            </div>
        </div>
    )
}

export default SingleUser
