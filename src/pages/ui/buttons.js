import React from 'react'
import { Card,Button,Icon,Radio  } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            isLoad: false,
            isLoad2: false,
            size: 'default' //默认按钮的尺寸
        }
    }
    componentWillMount(){
        console.log(5566699)
    }
   handleLoad= ()=>{
    this.setState({
        isLoad2: true
     })
   }
   handleButtonSize= (e)=>{
       e= e || window.event
       let target= e.target || e.srcElement
       this.setState({
        size: target.value
       })
   }
    render(){
        return(
            <div className="button">
                 <Card title="基础按钮">
                    <Button type="primary">Primary</Button>
                    <Button>Primary</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="danger">danger</Button>
                    <Button disabled>disabled</Button>
                </Card>

                <Card title="图形按钮">
                    <Button type="primary" icon="plus">Primary</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button type="primary" icon="download">dashed</Button>
                    <Button type="carcel">danger</Button>
                    <Button icon="forward" disabled>disabled</Button>
                </Card>

                <Card title="loading按钮">
                    <Button type="primary" loading={true}>Primary</Button>
                    <Button shape="circle" loading={true}></Button>
                    <Button type="primary" icon="download" loading={true}>dashed</Button>
                    <Button type="carcel">danger</Button>
                    <Button icon="forward" loading={this.state.isLoad} onClick={()=>{
                     this.setState({
                        isLoad: true
                     })
                    }}>点击</Button>
                     <Button icon="forward" loading={this.state.isLoad2} onClick={this.handleLoad}>点击</Button>
                </Card>

                <Card title="按钮组">
                <Button.Group size="default">
                    <Button type="primary" style={{marginRight: 0}}>
                        <Icon type="left" />
                        Backward
                    </Button>
                    <Button type="primary">
                        Forward
                        <Icon type="right" />
                    </Button>
                </Button.Group>
                </Card>

                <Card title="按钮尺寸">
                    <Radio.Group onChange={this.handleButtonSize} value={this.state.size}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                         <Button type="primary" size={this.state.size}>Primary</Button>
                        <Button size={this.state.size}>Default</Button>
                        <Button type="dashed" size={this.state.size}>Dashed</Button>
                        <Button type="danger" size={this.state.size}>Danger</Button>
                </Card>
            </div>
        )
    }
}