import React from 'react'
import Card from '../../components/ui/Card'
import { ArrowDown, ArrowUp } from 'lucide-react'

const StatItem = ({ stat }) => {
    return (
            <Card>
                <div className='w-[230px] flex items-center gap-2 py-2'>
                    <div className={`rounded-full h-24 w-24 md:h-20 md:w-20 flex justify-center items-center ${stat.bgColor} p-2}`}>
                        <stat.icon  className={`h-12 w-12 md:h-10 md:w-10 ${stat.iconColor}`} />
                    </div>

                    <div className='flex flex-col w-max'>
                        <span className='text-gray-400 text-sm'>
                            {stat.title}
                        </span>
                        <div className='flex items-center font-bold'>
                            {stat.currencyIcon}
                            <span className='text-lg'>{stat.number}</span>
                            <span className='text-lg'>{stat.numberUnit}</span>
                        </div>

                        <div className="flex items-center">
                            {
                                stat.trend === "UP"
                                    ?
                                    <ArrowUp className='h-3 w-3 text-green-500' />
                                    :
                                    <ArrowDown className='h-3 w-3 text-red-500'/>
                            }
                            <span className={`${stat.trend === "UP" ? "text-green-500" : "text-red-500"} font-bold text-sm`}>{stat.trendPercentage}%</span>
                            <span className='text-xs font-semibold mt-[1px]'>&nbsp;this {stat.trendTimePeriod}</span>
                        </div>
                    </div>
                </div>
            </Card>
    )
}

export default StatItem