import React from 'react'

import './Loading.scss'

export const Loading = () => {
    return (
        <div className='main__loading'>
            <div className='loading__content'>
                <div className='loading__content--item'></div>
                <div className='loading__content--item'></div>
                <div className='loading__content--item'></div>
            </div>
        </div>
    )
}
