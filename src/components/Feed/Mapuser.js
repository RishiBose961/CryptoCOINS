import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


const Mapuser = () => {
  const [showAllUser, setshowAllUser] = useState([])

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
      .then((res) => res.json())
      .then((data) => setshowAllUser(data))

  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows:false,
    pauseOnHover:false
  };



  return (
    <div className=" bg-black rounded-2xl mt-1">
     <Slider {...settings}>
      {
        showAllUser.map((user) => {
          return (
            <>
             
                <div style={{display: 'flex', justifyContent: 'center',}}>
                <div className=' text-white'>
                  <p>{user.current_price}</p><br/>   
                  <p  className='text-lime-300'>{user.price_change_percentage_24h} %</p>
                </div>
                  <p className='text-3xl mt-4 ml-4 text-white'>{user.name}</p>
                </div>
              
            </>

          )
        })
      }

      </Slider>

    </div>
  )
}

export default Mapuser