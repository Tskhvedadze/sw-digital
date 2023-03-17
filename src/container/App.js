import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllUsers from '../view/AllUsers/AllUsers'
import SingleUser from '../view/SingleUser/SingleUser'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AllUsers />} />
                <Route path='/user/:userID' element={<SingleUser />} />
            </Routes>
        </>
    )
}

export default App
