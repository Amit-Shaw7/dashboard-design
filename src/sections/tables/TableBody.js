import React from 'react';
import TableBodyItem from './TableBodyItem';

const TableBody = ({ tableBodyData }) => {
    return (
        <tbody className='w-full'>
            {
                tableBodyData.map((bodyItem) => (
                    <TableBodyItem key={bodyItem.productName} data={bodyItem} />
                ))
            }
        </tbody>
    )
}

export default TableBody