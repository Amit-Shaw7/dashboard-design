import React from 'react'
import StatsContainer from '../sections/Stats/StatsContainer'
import { stats } from '../constants/stats'
import StatItem from '../sections/Stats/StatItem'

export const DashBoard = () => {
    return (
        <div className='py-3 px-14 bg-transparent h-[89vh]'>
            <StatsContainer>
                    {
                        stats.map((stat) => (
                            <StatItem key={stat.title} stat={stat} />
                        ))
                    }
            </StatsContainer>
        </div>
    )
}
