import React from 'react'
import Banner from '../../components/container/banner'
import Monthlydeal from '../../components/container/monthlydeal'
import Recentnews from '../../components/container/recent'
import Header from '../../components/header'

function Home() {
  return (
    <div style={{paddingLeft: 145,paddingRight:145,backgroundColor:'#F7F6F4'}}>
      <Header/>
      <Banner/>
      <Monthlydeal/>
      <Recentnews/>
    </div>
  )
}

export default Home