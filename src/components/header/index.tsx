import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import logo from '../../assets/images/logo.png'
import bell from '../../assets/icons/bell.png'
import man from '../../assets/icons/man.png'
import search from '../../assets/icons/search.png'

function Header() {
  return (
    <div>
      <Row style={{height: 80, padding:'25px 165px 0 165px'}}>
        <Col span={6} style={{marginTop:5}}>
          <Image preview={false} src={logo}/>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={6}><Button style={{fontSize: 18, borderRadius: 5}} type='text'>Watches</Button></Col>
            <Col span={6}><Button style={{fontSize: 18, borderRadius: 5}} type='text'>Eyewear</Button></Col>
            <Col span={7}><Button style={{fontSize: 18, borderRadius: 5}} type='text'>Accessories</Button></Col>
            <Col span={5}><Button style={{fontSize: 18, borderRadius: 5}} type='text'>News</Button></Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col span={6}>
              <Button type='text'  style={{height:40,width:40,borderRadius: 20}} icon={<Image preview={false} src={search}/>}/>
            </Col>
            <Col span={12}>
              <Button type='text'  style={{height:40,borderRadius: 5}} icon={<Image preview={false} style={{marginRight:5,height:18,width:15}} src={man}/>}>
                Log In
              </Button>
            </Col>
            <Col span={6}>
              <Button type='text'  style={{height:40,width:40,borderRadius: 20,backgroundColor:'#F1DDC9'}} icon={<Image preview={false} src={bell}/>}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Header