import * as React from 'react'
import {inject, observer} from 'mobx-react'
import { Row, Col, Form, Icon, Input, Button, DatePicker, Select, Checkbox, Badge } from 'antd';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group

@inject('ballCreateStore')
@observer
export default class BallCreate extends React.Component<IProps> {

  style = {
    wrap: {
      display:'flex',
      paddingTop: '10px',
      flexWrap: 'wrap'
    },
    red: {
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      margin: '0 4px 4px 0',
      cursor: 'pointer',
      border: '1px solid red',
      color: 'red'
    },
    blue: {
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      margin: '0 4px 4px 0',
      cursor: 'pointer',
      border: '1px solid blue',
      color: 'blue'
    }
  }

  back = () => {
    this.props.history.go(-1)
  }

  setActive = (type: 'red'|'blue', selected: [number], num: number) => {
    if(selected.some((v, i) => num === v)) {
      let _style = JSON.parse(JSON.stringify(this.style[type]))
      _style['backgroundColor'] = type
      _style['color'] = '#fff'
      return _style
    } else {
      return this.style[type]
    }
  }

  // goDetail = (id: string) => {
  //   this.props.history.push(`/home/blog-tag/${id}`)
  // }
  
  componentDidMount() {
    // 
  }

  render(){
    const { redBalls, blueBalls, reds, blues, selectBall, mainData, inputChange, save } = this.props.ballCreateStore
 
    return <React.Fragment>
      <Form className="search-form" layout="horizontal">
        <h3>新增一期双色球</h3>
        <Row gutter={24}>
          <Col span={18}>
            <FormItem label="期号" labelCol={{sm: {span: 4}}} wrapperCol={{sm: { span: 6 }}}>
              <Input placeholder="期号" value={mainData.issue} onChange={e => inputChange(e.target.value, 'issue')}/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <FormItem label="红球" labelCol={{sm: {span: 4}}} wrapperCol={{sm: { span: 20 }}}>
              <div style={{
                display:'flex',
                paddingTop: '6px',
                flexWrap: 'wrap'}}>
              {
                redBalls.map((n: number, i: number) => {
                  return <div key={n} style={this.setActive('red', reds, n)} onClick={() => selectBall(n, 'red')}>{n}</div>
                })
              }
              </div>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <FormItem label="蓝球" labelCol={{sm: {span: 4}}} wrapperCol={{sm: { span: 20 }}}>
              <div style={{
                display:'flex',
                paddingTop: '6px',
                flexWrap: 'wrap'}}>
              {
                blueBalls.map((n: number, i: number) => {
                  return <div key={n} style={this.setActive('blue', blues, n)} onClick={() => selectBall(n, 'blue')}>{n}</div>
                })
              }
              </div>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <FormItem label="开奖日期" labelCol={{sm: {span: 4}}} wrapperCol={{sm: { span: 6 }}}>
              <Input placeholder="开奖日期" value={mainData.drawDate} onChange={e => inputChange(e.target.value, 'drawDate')}/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} offset={3}>
            <Button onClick={save} type="primary">保存</Button>
            <Button onClick={this.back}>取消</Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
    
  }
}