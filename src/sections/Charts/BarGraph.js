import React from 'react'
import { Bar, BarChart,Tooltip, XAxis } from 'recharts'
import { barGraphData } from '../../constants/chartData'
import Card from '../../components/ui/Card'
import ChartHeader from './ChartHeader'

const BarGraph = () => {
    return (
        <div className='col-span-2 p-2'>
            <Card>
                <ChartHeader title="Overview" subtitle="Monthly Earning" showDropdown={true} />
                <BarChart className='bg-white' width={700} height={300} data={barGraphData}>
                    <XAxis axisLine={false} tickLine={false} dy={10} dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip cursor={{ fill: "transparent" }} />
                    {/* <Legend /> */}
                    <Bar radius={10} dataKey="Sales" fill="#5A32EA" barSize={40} />
                </BarChart>
            </Card>
        </div>
    )
}

export default BarGraph