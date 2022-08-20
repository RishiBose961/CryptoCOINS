import React from 'react'
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Cry from '../../images/cryptocurrencies.png'
import Profile from '../Profile/Profile';




const Foooter = () => {
    return (
        <div className="bg-slate-500 py-8 px-2 mt-auto">
            <Container sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <div>
                <img src={Cry} alt='loading' width='50' sx={{ display: 'flex', justifyContent: 'center'}}/>
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-lime-500 relative inline-block mt-5">
                    <span class="relative text-white">CryptoCoins</span>
                    </span>
                </div>
            </Container>
            <Divider />
            <div className='container mt-7'>
                <div className="grid grid-cols-4 gap-5 divide-x">
                    <div className="text-2xl">
                        <p className="ml-2">Home</p>
                        <div className="ml-2 text-lg hover:bg-white w-20 rounded-full cursor-pointer">
                            <p className="ml-1">Account</p>
                        </div>
                    </div>
                    <div className="text-2xl">
                        <p className="ml-2">Details</p>
                        <div className="ml-1 text-lg hover:bg-white w-36 rounded-full cursor-pointer">
                            <p className="ml-1">CryptoCoins</p>
                        </div>
                    </div>
                    <div className="text-lg ml-2">

                        <div className="ml-1 text-lg hover:bg-red-400 ring-2 w-20 rounded-full cursor-pointer">
                            {/* <p className="ml-0"><Profile/></p> */}
                            
                        </div>
                    </div>
                    <div className="text-lg ml-2">
                        <div className="ml-1 text-lg hover:bg-lime-600 ring-2 w-20 rounded-full cursor-pointer">
                            <p className="ml-2">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foooter