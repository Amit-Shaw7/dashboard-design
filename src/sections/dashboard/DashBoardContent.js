import { stats } from "../../constants/stats"
import { tableBodyData, tableHeaderData } from "../../constants/tableData"
import BarGraph from "../Charts/BarGraph"
import ChartContainer from "../Charts/ChartContainer"
import PieGraph from "../Charts/PieGraph"
import StatItem from "../Stats/StatItem"
import StatsContainer from "../Stats/StatsContainer"
import Table from "../tables/Table"
import TableContainer from "../tables/TableContainer"


export const DashBoardContent = () => {
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
