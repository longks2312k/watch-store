import { Col, Image, Row } from 'antd'
import React from 'react'
import slice1 from '../../../assets/images/slice1.png'
import slice2 from '../../../assets/images/slice2.png'
import slice3 from '../../../assets/images/slice3.png'
import slice4 from '../../../assets/images/slice4.png'
import slice5 from '../../../assets/images/slice5.png'

function Instagram() {
  return (
    <div>
      <Col style={{marginBottom:70}}>
        <Col style={{fontSize:32,fontFamily:'Taviraj'}}>Instagram</Col>
        <Col style={{height:1,width:80,backgroundColor:'black'}}></Col>
        <Row style={{marginTop:20}}>
          <Col style={{width:'20%',}}><Image preview={false} style={{height:205}} src={slice1}/></Col>
          <Col style={{width:'20%',}}><Image preview={false} style={{height:205}} src={slice2}/></Col>
          <Col style={{width:'20%',}}><Image preview={false} style={{height:205}} src={slice3}/></Col>
          <Col style={{width:'20%',}}><Image preview={false} style={{height:205}} src={slice4}/></Col>
          <Col style={{width:'20%',}}><Image preview={false} style={{height:205}} src={slice5}/></Col>
        </Row>
      </Col>
    </div>
  )
}

export default Instagram