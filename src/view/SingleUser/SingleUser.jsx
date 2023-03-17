import React from 'react'

import { useParams } from 'react-router-dom'

import './SingleUser.scss'

const singleUser =
    'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1'

function SingleUser() {
    const param = useParams()
    console.log(param)

    return <div>SingleUser</div>
}

export default SingleUser
