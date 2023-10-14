import React from 'react'

const Card = ({ children }) => {
    return (
        <div className={`w-fit p-3 shadow-sm rounded-lg bg-white`}>
            {children}
        </div>
    )
}

export default Card