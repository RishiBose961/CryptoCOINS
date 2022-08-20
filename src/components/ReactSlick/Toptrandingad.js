import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const Toptrandingad = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 2000
    };

    const [getCoins, setgetCoins] = useState([])


    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
            .then((res) => res.json())
            .then((data) => setgetCoins(data))
    }, [])
    return (
        <div>
            <div className='font-bold text-3xl mb-10 bg-slate-200 h-10 text-red-600 rounded-full ring-4'>
                <p className='ml-5'>Trending Coins Ads</p>
            </div>
            <Slider {...settings}>
                {getCoins.map((getcoin,) => {
                    return (
           
                            <div className='mb-12' >
                                <img
                                    className='transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'
                                    src={getcoin.image}
                                    alt='' />
                                <p>{getcoin.name}</p>
                            </div>

                         
                     
                    )
                })}

            </Slider>


        </div>
    )
}

export default Toptrandingad