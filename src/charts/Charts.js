import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts'
import { useParams } from 'react-router-dom'
function Charts() {
    const { id } = useParams("");
    const [getDatage, setgetDatage] = useState([]);
    const [getDatacommit, setgetDatacommit] = useState([]);

    useEffect(() => {
        const getCommitData = async () => {
            const getAge = [];
            const getCommit = []

            const reqData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h`)
            const resData = await reqData.json()
            console.log(resData);

            for (let i = 0; i < resData.length; i++) {
                getAge.push(resData[i].current_price)
                getCommit.push(resData[i].name)
            }
            setgetDatage(getAge);
            setgetDatacommit(getCommit)
        }
        getCommitData()
    }, [])

    // console.log(getDatage);
    return (
        <div>
            <div className="container-fluid mb-3 mt-3">
                <Chart
                    type="area"
                    width={1380}
                    height={550}

                    series={[
                        {
                            name: "C P",
                            //age
                            data: getDatage,
                        }
                    ]}

                    options={{
                        title: {
                            text: "CryptoCoins Charts",
                            style: { fontSize: 20 }
                        },
                        colors: ['#00E396'],
                        stroke: { width: 2, curve: 'straight', },
                    labels: getDatacommit,

                        xaxis: {
                            title: {
                                text: "CryptoCoins Name",
                                style: { fontSize: 20 }
                            }
                        },

                        // categories:[2005,2006,2007,2009,2010],

                        yaxis: {
                            title: { text: "Current Price", style: { fontSize: 20 }}
                        }
                    }
                    }
                >

                </Chart>

            </div>
        </div>
    )
}

export default Charts