import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import watch from '../../../assets/images/watch.png'
import cart from '../../../assets/icons/addtocart.png'
import btnlogo from '../../../assets/images/btnlogo.png'
import { LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons'

function Banner() {
  return (
    <div style={{height:500, backgroundColor:'#F1DDC9'}}>
      <Row>
        <Col span={9}>
          <Image preview={false} style={{marginTop:110}} src={watch}/>
        </Col>
        <Col span={11}>
          <Col style={{marginTop:56}}>
            <Col style={{fontSize:52,fontFamily: 'Taviraj',lineHeight:'80px'}}>WAY KAMBAS</Col>
            <Col style={{fontSize:52,fontFamily: 'Taviraj',lineHeight:'80px',marginTop:-20}}>MINI EBONY</Col>
            <Col style={{height:1,width:95,backgroundColor:'#000000',marginTop:20}}></Col>
            <Col style={{marginTop:10,fontSize:16,lineHeight:'22px',fontWeight:'400',color:'#333333'}}>MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</Col>
            <Col style={{marginTop:8,fontSize:16,lineHeight:'28px',fontWeight:'500'}}>Discover</Col>
            <Col style={{height:1,width:65,backgroundColor:'#000000'}}></Col>
          </Col>
          <Row style={{marginTop:50}}>
            <Button style={{height:50,width:160,backgroundColor:'#D84727'}} type='primary' icon={<ShoppingCartOutlined style={{fontSize:18}} />}>Add To Cart</Button>
            <Button style={{height:50,width:120,borderColor:'#D84727',marginLeft:10}} type='text' icon={<Image preview={false} src={btnlogo}/>}></Button>
          </Row>
        </Col>
        <Col span={4}>
          <Row style={{marginTop:474}}>
            <Col>
              <Button type='text' style={{borderColor:'#D84727',height:50,width:50}} icon={<LeftOutlined style={{color:'#D84727',fontSize:22}}/>}/>
            </Col>
            <Col>
            <Button type='primary' style={{backgroundColor:'#D84727',height:50,width:50,marginLeft:10}} icon={<RightOutlined style={{color:'#fff',fontSize:22}}/>}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Banner