import React from 'react'
import Card from '../../components/ui/Card';
import Chart from "react-apexcharts";
import ChartHeader from './ChartHeader';

const BarGraph = () => {
    return (
        <div className='lg:col-span-2' id="chart">
            <Card>
                <ChartHeader showDropdown={true} title="Customer" subtitle="Customers that buy products" />
                <Chart
                    height={215}
                    type='bar'
                    series={[{
                        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],

                    }]}

                    options={{
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                horizontal: false,
                                columnWidth: 40
                            }
                        },
                        grid: {
                            show: false
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors: ['#5A32EA'],

                        legend: {
                            show: false
                        },
                        chart: {
                            toolbar: {
                                show: false
                            }
                        },
                        xaxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July',
                                'Aug', 'Sept', 'Oct'
                            ],
                            axisTicks: false,
                            axisBorder: {
                                show: false
                            }
                        },
                        yaxis: {
                            show: false
                        },
                        responsive: [
                            {
                                breakpoint: 480,
                                options: {
                                    plotOptions: {
                                        bar: {
                                            columnWidth: 30
                                        }
                                    },
                                    legend: {
                                        show: false
                                    }
                                }
                            },
                            {
                                breakpoint: 410,
                                options: {
                                    plotOptions: {
                                        bar: {
                                            columnWidth: 20
                                        }
                                    },
                                    legend: {
                                        show: false
                                    }
                                }
                            },
                        ]
                    }} />
            </Card>
        </div>
    )
}

export default BarGraph