import React from 'react'
import { Card,Button } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            isLoad: false,
            isLoad2: false
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
            </div>
        )
    }
}