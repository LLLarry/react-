import React from 'react'
import { Card,Button,Icon,message  } from 'antd'
import './ui.less'
export default class Message extends React.Component {
    handleMessage= type=>{
        message[type]('This is a normal message');
    }
    render(){
        return (
            <div className="message">
                <Card title="全局Messages提示">
                    <Button type="primary" onClick={()=> this.handleMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=> this.handleMessage('warning')}>Warning</Button>
                    <Button type="danger" onClick={()=> this.handleMessage('error')}>Error</Button>
                    <Button type="default" onClick={()=> this.handleMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=> this.handleMessage('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}