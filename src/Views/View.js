import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import AppBarrr from '../components/AppBarrr/AppBarrr';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@mui/material';
import Toptrandingad from '../components/ReactSlick/Toptrandingad';

import Chart from 'react-apexcharts'
import Charts from '../charts/Charts';


const View = () => {
  const { id } = useParams("");
  // console.log(id);

  const [loading, setloading] = React.useState(false)


  const [getuserdata, setgetuserdata] = useState([])
  // console.log(getuserdata);

  const getdata = async (e) => {

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error");
    } else {

      setgetuserdata(data);
      setloading(true);
      // console.log("get data");
    }
  }



  useEffect(() => {
    getdata();
  }, [])




  return (
    <div>
      <AppBarrr />

      {loading ? <>
        <div className="grid grid-cols-3 gap-4 mb-44">
          <div className="">
            <img src={getuserdata.image.large} alt="Coins Images" />
          </div>
          <div className="col-span-2 ring-2">
            <p className=" ml-2 text-xl font-semibold text-red-500">Coins Name : <span className='text-stone-600 text-2xl'>{getuserdata.name}</span></p>
            <p className="ml-2 text-xl font-semibold  text-red-500">Categories : <span className='text-stone-600 text-lg '>{getuserdata.categories}</span></p>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{getuserdata.name} Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {getuserdata.description.en}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <p className="ml-2 text-xl font-semibold  text-red-500">Links Offical : <Link href={getuserdata.links.homepage} className='text-stone-600 text-lg '>{getuserdata.links.homepage}</Link></p>
            <p className="ml-2 text-xl font-semibold  text-red-500">Current Price : <span className='text-stone-600 text-lg '>₹ {getuserdata.market_data.current_price.inr}</span></p>
            <p className="ml-2 text-xl font-semibold  text-red-500">Price Change Percentage 24h : <span className='text-stone-600 text-lg '>{getuserdata.market_data.price_change_percentage_24h} % </span></p>
            <p className="ml-2 text-xl font-semibold  text-red-500">Price Change in Currency 24h : <span className='text-stone-600 text-lg '>₹ {getuserdata.market_data.price_change_24h_in_currency.inr} </span></p>
          </div>
        </div>


        <div className="mb-32">
          <Charts />
        </div>



      </> : <Box sx={{ width: '100%', mt: 3 }}>
        <LinearProgress />
      </Box>}

      <div className="mt-6">
        <Toptrandingad />
      </div>

    </div>
  )
}

export default View