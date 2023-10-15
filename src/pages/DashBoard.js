import React from 'react'
import StatsContainer from '../sections/Stats/StatsContainer'
import { stats } from '../constants/stats'
import StatItem from '../sections/Stats/StatItem'
import ChartContainer from '../sections/Charts/ChartContainer'
import Table from '../sections/tables/Table'
import TableContainer from '../sections/tables/TableContainer'
import { tableBodyData, tableHeaderData } from '../constants/tableData'
import BarGraph from '../sections/Charts/BarGraph'
import PieGraph from '../sections/Charts/PieGraph'

export const DashBoard = () => {
    return (
        <div className='py-3 px-4 md:px-14 bg-transparent h-[89vh] overflow-auto flex flex-col gap-5'>
            <StatsContainer>
                {
                    stats.map((stat) => (
                        <StatItem key={stat.title} stat={stat} />
                    ))
                }
            </StatsContainer>

            <ChartContainer>
                {/* <BarGraph /> */}
                <BarGraph />
                <PieGraph />
            </ChartContainer>

            <TableContainer>
                <Table tableHeadData={tableHeaderData} tableBodyData={tableBodyData} />
            </TableContainer>
        </div>
    )
}
