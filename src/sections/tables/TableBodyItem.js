import React from 'react'

const TableBodyItem = ({data}) => {
    return (
        <tr>
            <td>
                <div className='py-3 flex items-center gap-5'>
                    <img src={data?.image} alt={data?.productName} height="50px" width="60px" className='rounded-md object-contain' />
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-bold'>{data?.productName}</h3>
                        <p className='text-xs text-gray-500'>{data?.productDescription}</p>
                    </div>
                </div>
            </td>
            <td className='text-center font-semibold text-gray-600 text-sm'>{data?.stock} in stock</td>
            <td className='text-center font-bold'>$ {data?.price}</td>
            <td className='text-center font-semibold text-gray-600  text-md'>{data?.totalSales}</td>
        </tr>
    )
}

export default TableBodyItem