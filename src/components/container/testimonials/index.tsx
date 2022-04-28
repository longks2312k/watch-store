import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import avata from '../../../assets/images/avata.png'
import left from '../../../assets/icons/left.png'
import right from '../../../assets/icons/right.png'
import './style.css'

function Testimonials() {
  return (
    <div>
      <Row style={{marginTop:100,marginBottom:50}}>
        <Col span={14}>
          <Image className='test-shadow' style={{marginTop:60}} preview={false} src={avata}/>
          <Col style={{marginTop:10}}>
            <Button type='text'  style={{marginRight:10}} icon={<Image preview={false} src={left}/>}></Button>
            <Button type='text' icon={<Image preview={false} style={{height:30,width:50}}  src={right}/>}></Button>
          </Col>
        </Col>
        <Col span={10}>
          <Col style={{marginBottom:60}}>
            <Col style={{fontSize:32,fontFamily:'Taviraj'}}>Testimonials</Col>
            <Col style={{height:1,width:100,backgroundColor:'black'}}></Col>
          </Col>
          <Col style={{fontSize:16,fontFamily:'Taviraj',width:500,marginBottom:40}}>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</Col>
          <Col style={{fontSize:24,fontWeight:'500',fontFamily:'Taviraj'}}>Gita Savitri</Col>
          <Col style={{fontSize:16,fontFamily:'Taviraj',fontWeight:'200',color:'gray'}}>Content Creator/Influencer</Col>
        </Col>
      </Row>
    </div>
  )
}

export default Testimonials