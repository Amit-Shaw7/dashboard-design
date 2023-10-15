import React from 'react'

const TableHeaders = ({ tableHeadData }) => {
    return (
        <thead className='mb-5'>
            <tr className='text-gray-400 text-sm'>
                {
                    tableHeadData.map((head , idx) => (
                        <th key={head} className={`text-${idx === 0 ? "left" : "center" } font-light`}>{head}</th>
                    ))
                }
            </tr>
        </thead>

    )
}

export default TableHeaders