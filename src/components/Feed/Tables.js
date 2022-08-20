import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';




export default function Tables() {

    const columns = [
        { field: 'name', headerName: 'Coins Name', width: 160, },
        { field: 'market_cap_rank', headerName: 'MarKet Ranking', width: 320 },
        { field: 'current_price', headerName: '(₹)Current Price', width: 360 },
        {
            field: 'price_change_24h',
            headerName: '(₹) Price Change 24h',
            width: 390,
        },
        {
            field: 'market_cap',
            headerName: 'Market Cap',
            width: 210,
        },
    ];

    const [showAllUser, setshowAllUser] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
            .then((res) => res.json())
            .then((data) => setshowAllUser(data))
    }, [])




    return (
        <>
            <div className='font-bold text-3xl mb-10 bg-slate-200 h-10 text-red-600 rounded-full ring-4'>
                <p className='ml-5'>Analyse Trending Coins</p>
            </div>
            <div className='bg-slate-200 ring-2 ring-red-600 mb-9'>
                <div style={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={showAllUser}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}

                    />
                </div>
            </div>
        </>
    );
}
