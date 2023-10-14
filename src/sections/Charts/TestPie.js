import React from 'react';
import Chart from "react-apexcharts";
import Card from '../../components/ui/Card';
import ChartHeader from './ChartHeader';

var options = {
    series: [44, 55, 41],
    chart: {
        type: 'donut',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};



const TestPie = () => {
    return (
        <div className='my-1 w-full' id="chart">
            <Card>
                <ChartHeader showDropdown={false} title="Customer" subtitle="Customers that buy products" />
                <div className='py-10'>
                    <Chart type='donut' series={[12, 40]} options={{
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            label:"Total new customers",
                                            fontSize:"0.8rem",
                                            fontWeight:"bold",  
                                            showAlways: true,
                                            show: true
                                        }
                                    }
                                }
                            }
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
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    show: false
                                }
                            }
                        }]
                    }} />
                </div>
            </Card>
        </div>
    )
}

export default TestPie
