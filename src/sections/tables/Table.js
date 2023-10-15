import React from 'react'
import Card from '../../components/ui/Card'
import ChartHeader from '../Charts/ChartHeader'
import TableHeaders from './TableHeaders'
import TableBody from './TableBody'

const Table = ({ tableHeadData, tableBodyData }) => {
    return (
        <div className='col-span-12'>
            <Card>
                <div>
                    <ChartHeader title="Product Sell" subtitle="" showDropdownForTable={true} showSearch={true} />
                    <div className='overflow-x-auto md:w-full'>
                        <table className='w-[700px] md:w-full'>
                            <TableHeaders tableHeadData={tableHeadData} />
                            <TableBody tableBodyData={tableBodyData} />
                        </table>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Table