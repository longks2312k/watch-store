import { Button, Col, Row, Image } from 'antd'
import React from 'react'
import hand from '../../../assets/images/hand.png'
import './style.css'

function Recentnews() {
  return (
    <div>
      <Row>
        <Col span={7}>
          <Col style={{marginBottom:220}}>
            <Col style={{fontSize:32,fontFamily:'Taviraj'}}>Recent News</Col>
            <Col style={{height:1,width:100,backgroundColor:'black'}}></Col>
          </Col>
          <Col style={{}}>
            <Col style={{fontSize:16,fontFamily:'Taviraj',fontWeight:'200',color:'gray'}}>Where To Travel</Col>
            <Col style={{fontSize:30,fontFamily:'Taviraj',width:350}}>Matoa Where To Travel? Yogyakarta</Col>
            <Button type='text' style={{borderWidth:1,color:'#D84727',borderColor:'#D84727',marginTop:30,height:58,width:150}}>Discover</Button>
          </Col>
        </Col>
        <Col span={2}></Col>
        <Col span={15}>
          <Image style={{height:484,width:610,marginTop:110}} className='shadow' preview={false} src={hand}/>
        </Col>
      </Row>
    </div>
  )
}

export default Recentnews