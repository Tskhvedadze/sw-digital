import React from 'react'

import './Card.scss'

export const Card = ({ imageUrl, name, lastName, prefix, title }) => {
    return (
        <div className='list__item'>
            <div className='list__item--content'>
                <img
                    className='content--image'
                    src={imageUrl}
                    alt={`${name}${lastName}`}
                />
                <div>
                    <h2 className='list__item--description '>
                        {`${prefix} ${name} ${lastName}`}
                    </h2>
                    <p className='list__item--description '>{title}</p>
                </div>
            </div>
        </div>
    )
}
