import React from 'react'
import { Card,Button,Icon,Modal  } from 'antd'
import './ui.less'
export default class Modals extends React.Component {
    state= {
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false
    }
    handleOpenModals= (type)=>{
        this.setState({
            [type]: true
        })
    }
    handleCancel= (type)=>{
        this.setState({
            [type]: false
        })
    }
    // 处理confirm
    handleConfirm= (type)=>{
        Modal[type]({
            title: '提示',
            content: '确认提交订单吗？',
            okText: '确认',
            cancelText: '取消',
          });
    } 
    render(){
      return(
            <div className="modals">
                 <Card title="基础模态框">
                    <Button type="primary" onClick={()=>{this.handleOpenModals('visible1')}}>Open</Button>
                    <Button type="primary" onClick={()=>{this.handleOpenModals('visible2')}}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>{this.handleOpenModals('visible3')}}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>{this.handleOpenModals('visible4')}}>水平垂直居中</Button>
                </Card>

                <Modal
                    title="React"
                    visible={this.state.visible1}
                    onOk= {this.handleOk}
                    // 函数事假传参的时候，一定要回调，返回传参函数，因为不会调回加载的时候就会执行
                    onCancel= {()=>{this.handleCancel("visible1")}} 
                    >
                    <p>你准备好学习Modal了吗？</p>
                </Modal>

                <Modal
                    title="React"
                    visible={this.state.visible2}
                    onOk= {this.handleOk}
                    okText="好的"
                    cancelText="算了吧"
                    // 函数事假传参的时候，一定要回调，返回传参函数，因为不会调回加载的时候就会执行
                    onCancel= {()=>{this.handleCancel("visible2")}} 
                    >
                    <p>自定义页脚</p>
                </Modal>
                {/* 注意modals 3,4使用自定义的样式在ui.less的文件中 */}
                <Modal
                    title="React"
                    visible={this.state.visible3}
                    onOk= {this.handleOk}
                    style= {{top: '20px'}}
                    // 函数事假传参的时候，一定要回调，返回传参函数，因为不会调回加载的时候就会执行
                    onCancel= {()=>{this.handleCancel("visible3")}} 
                    >
                    <p>距离顶部20px</p>
                </Modal>

                <Modal
                    title="React"
                    visible={this.state.visible4}
                    onOk= {this.handleOk}
                    wrapClassName="vertical-center-modal"
                    // 函数事假传参的时候，一定要回调，返回传参函数，因为不会调回加载的时候就会执行
                    onCancel= {()=>{this.handleCancel("visible4")}} 
                    >
                    <p>距离顶部20px</p>
                </Modal>

                <Card title="信息确认框">
                    <Button type="primary" onClick={()=>{this.handleConfirm('confirm')}}>Confirm</Button>
                    <Button type="primary" onClick={()=>{this.handleConfirm('info')}}>Info</Button>
                    <Button type="primary" onClick={()=>{this.handleConfirm('success')}}>Success</Button>
                    <Button type="primary" onClick={()=>{this.handleConfirm('warning')}}>Warning</Button>
                </Card>
            </div>
        )
    }
}
