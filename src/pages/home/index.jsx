import React from 'react'
import { Form } from 'antd'
import Editor from '@/components/common/editor'

const Home = ({ form }) => {
  const { getFieldDecorator } = form
  const style = {
    height: '100vh',
    overflow: 'hidden'
  }
  return (
    <Form style={style}>
      <Form.Item label="" style={style}>
        {getFieldDecorator('content', {})(<Editor />)}
      </Form.Item>
    </Form>
  )
}

const Forms = Form.create()(Home)
export default Forms
