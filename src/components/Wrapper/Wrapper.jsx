import React from 'react'

import './Wrapper.scss'

export const Wrapper = ({ children, className, onScroll }) => {
    return (
        <div className={`list ${className}`} onScroll={onScroll}>
            {children}
        </div>
    )
}
