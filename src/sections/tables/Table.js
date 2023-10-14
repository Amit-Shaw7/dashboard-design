import React from 'react'
import Card from '../../components/ui/Card'
import ChartHeader from '../Charts/ChartHeader'
import TableHeaders from './TableHeaders'
import TableBody from './TableBody'

const Table = () => {
    return (
        <div className='col-span-12 bg-blue-500'>
            <Card>
                <div>
                    <ChartHeader title="Product Sell" subtitle="" showDropdown={true} showSearch={true} />
                    <table className='w-full'>
                        <TableHeaders />
                        <TableBody />
                    </table>
                </div>
            </Card>
        </div>
    )
}

export default Table