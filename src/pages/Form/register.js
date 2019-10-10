import React from 'react'
import { Card,Form,Input,Radio,InputNumber,Switch,DatePicker,TimePicker,Select,Upload,Icon,Row,Col,Checkbox, Button,AutoComplete, } from 'antd'
const { Option } = Select;
 class Reg extends React.Component {
    handleSubmit= ()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
          });
    }
    render(){
        const {getFieldDecorator} = this.props.form
        const layoutCol= {
            labelCol:{ //控制label标题栏
                sm: { span: 4, }, //标题栏，当sm时站4/24份
                xs: { span: 24, },//标题栏，当xs时站1份,独占一栏
               
              },       
            wrapperCol:{  //控制内容栏
                sm: { span: 12, }, //内容栏，当sm时站16/24份
                xs: { span: 24,},//内容栏，当xs时站1份,独占一栏
               
            }
        }
        return(
            <div>
                <Card title="Antd注册组件">
                   <Form >
                       {/*这里的{}是包裹js代码的*/}
                       <Form.Item label="用户名" {...layoutCol} >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请填写用户名!' }],
                        })(
                            <Input placeholder="username" />
                            )}
                       </Form.Item>
                       <Form.Item label="密码" {...layoutCol}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请填写密码!' }],
                        })(
                            <Input placeholder="password" />
                            )}
                       </Form.Item>
                       <Form.Item label="性别" {...layoutCol}>
                        {getFieldDecorator('gender', {
                            initialValue: 1,
                            rules: [{ required: true, message: 'gggsss!' }],
                        })(
                            <Radio.Group>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </Radio.Group>
                            )}
                       </Form.Item>
                       <Form.Item label="年龄" {...layoutCol}>
                        {getFieldDecorator('age', {
                            initialValue: 18,
                            rules: [],
                        })(
                            <InputNumber min={1} max={200}/>
                            )}
                        </Form.Item>
                        <Form.Item label="当前状态" {...layoutCol}>
                        {getFieldDecorator('status', {
                            initialValue: '2',
                            rules: [],
                        })(
                            <Select loading>
                            <Option value="1">唱歌</Option>
                            <Option value="2">睡觉</Option>
                            <Option value="3">跳舞</Option>
                            <Option value="4">篮球</Option>
                            </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="爱好" {...layoutCol}>
                        {getFieldDecorator('hobby', {
                            initialValue: ['3','2'],
                            rules: [],
                        })(
                            <Select loading   mode="multiple">
                            <Option value="1">旅行</Option>
                            <Option value="2">玩游戏</Option>
                            <Option value="3">逛街</Option>
                            </Select>
                            )}
                        </Form.Item>
                       <Form.Item label="是否已婚" {...layoutCol}>
                        {getFieldDecorator('select', {
                            valuePropName: 'checked',
                            initialValue: true,
                            rules: [],
                        })(
                            <Switch />
                            )}
                        </Form.Item>
                        <Form.Item label="生日" {...layoutCol}>
                        {getFieldDecorator('birthday', {
                            rules: [],
                        })(
                            <DatePicker />
                            )}
                        </Form.Item>
                        <Form.Item label="联系地址" {...layoutCol}>
                        {getFieldDecorator('address', {
                            initialValue: '北京市海淀区兴安路龙鼎科技',
                            rules: [],
                        })(
                            <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="早睡早起" {...layoutCol}>
                        {getFieldDecorator('upDateTime', {
                            rules: [],
                        })(
                            <TimePicker />
                            )}
                        </Form.Item>
                        <Form.Item label="上传头像" {...layoutCol}>
                        {getFieldDecorator('upLoadAvatar', {
                            valuePropName: 'fileList',
                            // getValueFromEvent: this.normFile
                        })(
                                <Upload.Dragger name="files" action="https://ant.design/upload.do">
                                    <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                </Upload.Dragger>
                            )}
                        </Form.Item>
                        <Form.Item labelCol={{ 
                         sm: { span: 4, offset: 4}, 
                            xs: { span: 24, offset: 4}
                        
                        }}       
                        wrapperCol={
                            {  //控制内容栏
                                sm: { span: 12, offset: 4}, //内容栏，当sm时站16/24份
                                xs: { span: 24, offset: 4},//内容栏，当xs时站1份,独占一栏
                            
                            } 
                        }>
                        {getFieldDecorator('checkAndSubmit', {
                            initialValue: false,
                            rules:[]
                        })(     <div>
                                    <Checkbox>已阅读协议</Checkbox>
                                    <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                                </div>
                            )}
                        </Form.Item>
                    </Form> 
                </Card>
            </div>
        )
    }
}
export default Form.create()(Reg); //将表单组件暴露出去
