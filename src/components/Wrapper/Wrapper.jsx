import React from 'react'

import './Wrapper.scss'

export const Wrapper = ({ children, className }) => {
    return <div className={`list ${className}`}>{children}</div>
}
