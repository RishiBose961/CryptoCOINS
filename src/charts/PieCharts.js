import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'


const PieCharts = () => {

    const [studentSubject, setStudentSubject] = useState([]);
    const [studentMarks, setStudentMarks] = useState([]);
    const [priceintwentyfour, setPriceintwentyfour] = useState([]);
    const [priceinonehour, setPriceinonehour] = useState([]);

    useEffect(() => {
        const sName = [];
        const sCurrentPrices = [];
        const sPricein24hours = [];
        const sPricein1hours = [];

        const getStudentData = async () => {
            const reqData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
            const resData = await reqData.json();
            console.log(resData);

            for (let i = 0; i < resData.length; i++) {
                sName.push(resData[i].name);
                sCurrentPrices.push(resData[i].current_price)
                sPricein24hours.push(resData[i].price_change_percentage_24h)
                sPricein1hours.push(resData[i].price_change_percentage_1h_in_currency)

            }
            setStudentSubject(sName);
            setStudentMarks(sCurrentPrices);
            setPriceintwentyfour(sPricein24hours)
            setPriceinonehour(sPricein1hours)


        }
        getStudentData();
    }, [])
    return (
        <div>
            <div className='font-bold text-3xl mb-10 bg-slate-200 h-10 text-red-600 rounded-full ring-4'>
                <p className='ml-5'>Trending Coins Details Graph</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
                <div class="">
                    <Chart
                        type='pie'
                        width={550}
                        height={1250}
                        // height={550}

                        series={studentMarks}

                        options={{
                            title: {
                                text: 'Current Price',
                            },
                            noData: { text: 'Empty data' },
                            labels: studentSubject
                        }}
                    ></Chart>
                </div>
                <div class="ml-1">
                    <Chart
                        type='pie'
                        width={550}
                        height={1250}
                        // height={550}

                        series={priceintwentyfour}

                        options={{
                            title: {
                                text: 'Price Change Percentage 24h'
                            },
                            noData: { text: 'Empty data' },
                            labels: studentSubject
                        }}
                    ></Chart>
                </div>
                <div class="ml-2">  <Chart
                    type='pie'
                    width={550}
                    height={1250}
                    // height={550}

                    series={priceinonehour}

                    options={{
                        title: {
                            text: 'Price Change In 1h'
                        },
                        noData: { text: 'Empty data' },
                        labels: studentSubject
                    }}
                ></Chart></div>
            </div>

        </div>
    )
}

export default PieCharts