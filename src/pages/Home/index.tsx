import React from 'react'
import Banner from '../../components/container/banner'
import Instagram from '../../components/container/Instagram'
import Monthlydeal from '../../components/container/monthlydeal'
import Recentnews from '../../components/container/recent'
import Testimonials from '../../components/container/testimonials'
import Banks from '../../components/footer/banks'
import Footer from '../../components/footer/footer'
import Header from '../../components/header'

function Home() {
  return (
    <div>
      <div style={{paddingLeft: 145,paddingRight:145,backgroundColor:'#F7F6F4'}}>
        <Header/>
        <Banner/>
        <Monthlydeal/>
        <Recentnews/>
        <Testimonials/>
        <Instagram/>
      </div>
      <div style={{backgroundColor:'#DA5E42'}}>
        <Banks/>
      </div>
      {/* <div style={{backgroundColor:'#D84727'}}>
        <Footer/>
      </div> */}
    </div>
  )
}

export default Home