import { Col, Row } from 'antd'
import React from 'react'

function Footer() {
  return (
    <div style={{height:420}}>
      <Row>
        <Col span={7}></Col>
        <Col span={7}></Col>
        <Col span={5}></Col>
        <Col span={5}></Col>
      </Row>
    </div>
  )
}

export default Footer