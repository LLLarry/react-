import React from 'react'
import {Card,Form,Input,Button,Checkbox,Message} from 'antd'
import './form.less'

class FormPage extends React.Component {
   
    handleSubmit= ()=>{
       const userInfo= this.props.form.getFieldsValue()
       console.log(userInfo)
       this.props.form.validateFields(function(error,value){ //校验这一组表单，看是否校验通过，如果通过，error为null，否则有值
        if(error){
            Message.warning('提交失败，请完成表单的信息')
            return
        }
       })
    }
    handleChargeVal= ()=>{
        this.props.form.setFieldsValue({username2: '改变的值'})
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="form">
                <Card title="Form表单">
                    <Form layout="inline" className="form1">
                        <Form.Item>
                            <Input placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码" />
                        </Form.Item>
                        <Button type="primary">提交</Button>
                    </Form>
                </Card>

                <Card title="Form表单带默认值、校验">
                    <Form layout="vertical" className="form2">
                        <Form.Item>
                            {
                                getFieldDecorator('username',{
                                    initialValue: 'jack', //默认值
                                    relus: [
                                        {
                                            required: true,
                                            message: '请输入用户名'
                                        }
                                    ] //匹配规则
                                })(
                                    <Input placeholder="请输入用户名" /> //返回的组件
                                )
                            }
                           
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    initialValue: '123456',
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入密码'
                                        },
                                        {
                                            pattern: /^\d+/g , //验证正则表达式
                                            message: '请输入纯数字的密码'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入密码" type="password" />
                                )
                            }
                           
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('checkout',{ //当这两个名字一样的时候，就自动形成两个值的双向绑定，如checkout上面的值一样，所以，两个复选框会同时选择、取消
                                    valuePropName: 'checked', //设置checked的名字
                                    initialValue: true}
                                )(
                                    <Checkbox>已阅读协议</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </Form.Item>
                       
                        <Button type="primary" style={{ display: 'block',margin: "0 auto",width: '90%'}} onClick={this.handleSubmit}>提交</Button>
                    </Form>
                </Card>


                <Card title="Form表单改变值">
                    <Form layout="vertical" className="form2">
                        <Form.Item>
                            {
                                getFieldDecorator('username2',{
                                    initialValue: 'jack', //默认值
                                    relus: [
                                        {
                                            required: true,
                                            message: '请输入用户名'
                                        }
                                    ] //匹配规则
                                })(
                                    <Input placeholder="请输入用户名" /> //返回的组件
                                )
                            }
                           
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    initialValue: '123456',
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入密码'
                                        },
                                        {
                                            pattern: /^\d+/g , //验证正则表达式
                                            message: '请输入纯数字的密码'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入密码" type="password" />
                                )
                            }
                           
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('checkout',{
                                    valuePropName: 'checked', //设置checked的名字
                                    initialValue: true}
                                )(
                                    <Checkbox>已阅读协议</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </Form.Item>
                        <Button type="primary" style={{ display: 'block',margin: "10px auto",width: '90%'}} onClick={this.handleChargeVal}>改变input值</Button>
                        <Button type="primary" style={{ display: 'block',margin: "0 auto",width: '90%'}} onClick={this.handleSubmit}>提交</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormPage);