import { Image, Col, Space, Row } from 'antd'
import React from 'react'
import logoicon1 from '../../../assets/icons/logoicon1.png'
import logoicon2 from '../../../assets/icons/logoicon2.png'
import logoicon3 from '../../../assets/icons/logoicon3.png'
import logoicon4 from '../../../assets/icons/logoicon4.png'
import logoicon5 from '../../../assets/icons/logoicon5.png'
import logoicon6 from '../../../assets/icons/logoicon6.png'
import logoicon7 from '../../../assets/icons/logoicon7.png'
import logoicon8 from '../../../assets/icons/logoicon8.png'
import logoicon9 from '../../../assets/icons/logoicon9.png'
import logoicon10 from '../../../assets/icons/logoicon10.png'

function Banks() {
  return (
    <div style={{paddingLeft: 185,paddingRight:185,}}>
        <Row>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon1}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon2}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon3}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon4}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon5}/></Col>
        </Row>
        <Row>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon6}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon7}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon8}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon9}/></Col>
          <Col style={{flex:1,marginLeft:30}}><Image preview={false} src={logoicon10}/></Col>
        </Row>
    </div>
  )
}

export default Banks