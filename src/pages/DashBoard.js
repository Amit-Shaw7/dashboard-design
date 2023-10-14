import React from 'react'
import StatsContainer from '../sections/Stats/StatsContainer'
import { stats } from '../constants/stats'
import StatItem from '../sections/Stats/StatItem'
import ChartContainer from '../sections/Charts/ChartContainer'
import BarGraph from '../sections/Charts/BarGraph'
import TestPie from '../sections/Charts/TestPie'
import Table from '../sections/tables/Table'
import TableContainer from '../sections/tables/TableContainer'

export const DashBoard = () => {
    return (
        <div className='py-3 px-14 bg-transparent h-[89vh] overflow-auto flex flex-col gap-10'>
            <StatsContainer>
                {
                    stats.map((stat) => (
                        <StatItem key={stat.title} stat={stat} />
                    ))
                }
            </StatsContainer>

            <ChartContainer>
                <BarGraph />
                <TestPie />
            </ChartContainer>

            <TableContainer>
                <Table />
            </TableContainer>
        </div>
    )
}
