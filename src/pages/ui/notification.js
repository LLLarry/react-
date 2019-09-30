import React from 'react'
import { Card,Button,notification  } from 'antd'
import './ui.less'
export default class Notification extends React.Component {
    handleAlertTip= (type,direction)=>{
        notification.config({placement: direction})
        notification[type]({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
    }
    render(){
        return(
            <div class="notification">
                <Card title="通知提示框">
                    <Button type="primary" onClick={() => this.handleAlertTip('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleAlertTip('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleAlertTip('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleAlertTip('error')}>Error</Button>
                </Card>

                <Card title="自定义位置提示框">
                    <Button type="primary" onClick={() => this.handleAlertTip('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleAlertTip('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleAlertTip('warning','bottomRight')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleAlertTip('error','bottomLeft')}>Error</Button>
                </Card>
            </div>
        )
    }
}