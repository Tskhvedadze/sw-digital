import React from 'react'

import './Card.scss'

export const Card = () => {
    return (
        <div className='list__item'>
            <div className='list__item--content'>
                <img
                    className='content--image'
                    src='http://placeimg.com/640/480/animals?v=1'
                    alt='Jazmin Abernathy'
                />
                <div>
                    <h2 className='list__item--description '>
                        Mrs. Jazmin Abernathy
                    </h2>
                    <p className='list__item--description '>
                        Corporate Markets Director
                    </p>
                </div>
            </div>
        </div>
    )
}
