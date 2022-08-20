import React from 'react'
import PieCharts from '../../charts/PieCharts'
import AppBarrr from '../../components/AppBarrr/AppBarrr'
import Mapuser from '../../components/Feed/Mapuser'
import Tables from '../../components/Feed/Tables'
import Foooter from '../../components/Footer/Foooter'
import Reactslick from '../../components/ReactSlick/Reactslick'

const Home = () => {
  return (
    <div>
        <Mapuser/>
        <AppBarrr/>
        <Reactslick/>
        <PieCharts/>
        <Tables/>
        <Foooter/>
    </div>
  )
}

export default Home