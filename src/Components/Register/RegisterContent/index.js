import React from 'react'
import {Col, Form, Row, Input, Radio, Button} from "antd"


const RegisterContent = () => {
  return (
    <div style={{background: "#FABD18"}}>
        <Row gutter={[8, 8]} style={{padding: "5px"}}>
          <Col xs={24} sm={24} lg={24}>
            <Form>
              <Col lg={24}>
                <Form.Item
                    label="Full name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Input placeholder="Fullname" 
                    />
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Input placeholder="Email" 
                    />
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="Phone nUmber"
                    name="number"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Input placeholder="Phone number" 
                    />
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="Registration number"
                    name="regnumber"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Input placeholder="reg number" 
                    />
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="College / School"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Radio.Group>
                      <Col lg={24}>
                        <Radio value="CoICT">CoICT</Radio>
                      </Col>
                      <Col lg={24}>
                      <Radio value="CoET">CoET</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Other">Other</Radio>
                      </Col>
                    </Radio.Group>
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="Department"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Radio.Group>
                      <Col lg={24}>
                        <Radio value="Department of Electronics and Telecommunications Engineering">Department of Electronics and Telecommunications Engineering</Radio>
                      </Col>
                      <Col lg={24}>
                      <Radio value="Department of Computer Science and Engineering ">Department of Computer Science and Engineering </Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Other">Other</Radio>
                      </Col>
                    </Radio.Group>
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="Program of Study *"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Radio.Group>
                      <Col lg={24}>
                        <Radio value="Bsc Telecommunications Engineering">Bsc Telecommunications Engineering</Radio>
                      </Col>
                      <Col lg={24}>
                      <Radio value="Bsc Computer Engineering and Information Technology ">Bsc Computer Engineering and Information Technology  </Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Bsc Electronics Engineering ">Bsc Electronics Engineering </Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Bsc Electronics Science and Communication">Bsc Electronics Science and Communication</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Bsc Business Information Technology ">Bsc Business Information Technology </Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Bsc Computer Science ">Bsc Computer Science </Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Other">Other</Radio>
                      </Col>
                    </Radio.Group>
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="Year of Study *"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Radio.Group>
                      <Col lg={24}>
                        <Radio value="1">1</Radio>
                      </Col>
                      <Col lg={24}>
                      <Radio value="2">2</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="3">3</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="4">4</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="5">5</Radio>
                      </Col>
                    </Radio.Group>
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                    label="Which Are of ICT are you Interested? *"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Fullname can not be empty!',
                        },
                    ]}
                >
                    <Radio.Group>
                      <Col lg={24}>
                        <Radio value="Database Design and Implementation">Database Design and Implementation</Radio>
                      </Col>
                      <Col lg={24}>
                      <Radio value="Networking">Networking</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Software Development ">Software Development </Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="CyberSecurity">CyberSecurity</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Internet of Things">Internet of Things</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Machine Learning">Machine Learning</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Artificial Intelligence">Artificial Intelligence</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Embedded Electronics">Embedded Electronics</Radio>
                      </Col>
                      <Col lg={24}>
                        <Radio value="Other">Other</Radio>
                      </Col>
                    </Radio.Group>
                  </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label="Where did you start doing/learn the area mentioned above?*"
                > 
                    <Input />
                </Form.Item>
              </Col>
              <Button style={{background: "#000", borderRadius: "20px", color: "#fff"}} type='submit'>Submit</Button>
            </Form>
          </Col>
        </Row>
    </div>
  )
}

export default RegisterContent