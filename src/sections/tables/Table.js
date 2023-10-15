import React from 'react'
import Card from '../../components/ui/Card'
import ChartHeader from '../Charts/ChartHeader'
import TableHeaders from './TableHeaders'
import TableBody from './TableBody'

const Table = ({tableHeadData , tableBodyData}) => {
    return (
        <div className='col-span-12'>
            <Card>
                <div>
                    <ChartHeader title="Product Sell" subtitle="" showDropdown={true} showSearch={true} />
                    <table className='w-300px md:w-full overflow-x-auto whitespace-nowrap'>
                        <TableHeaders tableHeadData={tableHeadData}/>
                        <TableBody tableBodyData={tableBodyData}/>
                    </table>
                </div>
            </Card>
        </div>
    )
}

export default Table