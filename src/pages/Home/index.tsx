import React from 'react'
import Banner from '../../components/container/banner'
import Header from '../../components/header'

function Home() {
  return (
    <div style={{paddingLeft: 165,paddingRight:165,backgroundColor:'#E5E5E5'}}>
      <Header/>
      <Banner/>
    </div>
  )
}

export default Home