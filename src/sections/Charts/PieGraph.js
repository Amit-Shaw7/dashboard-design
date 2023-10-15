import React from 'react';
import Chart from "react-apexcharts";
import Card from '../../components/ui/Card';
import ChartHeader from './ChartHeader';

const PieGraph = () => {
    return (
        <div className='w-full' id="chart">
            <Card>
                <ChartHeader showDropdown={false} title="Customer" subtitle="Customers that buy products" />
                {/* <div className='py-1'> */}
                    <Chart height={250} type='donut' series={[12, 40, 0]} options={{
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            label: "Total",
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            showAlways: true,
                                            show: true
                                        },
                                        value: {
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            showAlways: true,
                                            show: true,
                                        }
                                    },
                                    size: "80%"
                                },
                            },
                        },
                        chart: {
                            width: 100
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors: ['#F8228D', '#5E37E9'],
                        fill: {
                            type: 'gradient',
                        },
                        legend: {
                            show: false
                        },

                        responsive: [{
                            // breakpoint: 350,
                            options: {
                                chart: {
                                    width: 400,
                                },
                                legend: {
                                    show: false
                                }
                            }
                        }]
                    }} />
                {/* </div> */}
            </Card>
        </div>
    )
}

export default PieGraph
