import React from 'react'

const TableContainer = ({children}) => {
    return (
        <div className='w-full grid grid-cols-12'>
            {children}
        </div>)
}

export default TableContainer