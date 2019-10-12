import React from 'react'
import {Card,Button,Input,Form,Select,Modal,Table,Badge} from 'antd'
import Axios from '../../axios'
import './index.less'
import { func } from 'prop-types';
const { Option } = Select;

export default class City extends React.Component {
    state= {
        isShowOpenCity: true
    }
    //开通城市
    handleOpenCityCommit= ()=>{

    }
    render(){
        return(
            <div className="city">
                <Card style={{marginBottom: 15}}>
                    <CityForm />
                </Card>
                <Card>
                    <Button type="primary" onClick={()=>{this.setState({isShowOpenCity: true})}}>开通城市</Button>
                </Card>
                <Card>
                    <CityTable />
                </Card>
                <Modal
                title="添加开通城市"
                okText="添加"
                cancelText="取消"
                visible={this.state.isShowOpenCity}
                onOk={this.handleOpenCityCommit}
                onCancel={()=>{this.setState({isShowOpenCity: false})}}
                >
                    {/* 将定义的Form组件，赛道Modal中进行使用 */}
                    <OpenCityModalForm/> 
                </Modal>
            </div>
        )
    }
}

class OpenCityForm extends React.Component {
  handleReset= ()=>{ //重置表单信息
        const {resetFields} = this.props.form
        resetFields()
    }
    handleSubmit= ()=>{
        const { form: { validateFields } } = this.props;
        validateFields((errors, values) => {
           console.log(errors, values)
           let status= null
           if(!errors){

            status= {
               flag: 'success',
               content: `获取值成功`
            }
           }else {
            status= {
                flag: 'danger',
                content: `获取值失败`
             }
           }
           Modal[status.flag]({
               title: '提示',
               content: status.content
           })
        });
    }
    render(){
        const {getFieldDecorator}= this.props.form
        return(
            <div className="openCityForm">
                <Form layout="inline">
                    <Form.Item label="城市">
                        {
                        getFieldDecorator('city_id', {
                        initialValue: '0',
                        rules: [],
                        })(
                        <Select style={{width: 150}} >
                            <Option value="0">全部</Option>
                            <Option value="1">北京</Option>
                            <Option value="2">上海</Option>
                            <Option value="3">广州</Option>
                            <Option value="4">深圳</Option>
                        </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="用车模式">
                        {getFieldDecorator('use_mode', {
                        initialValue: '0',
                        rules: [],
                        })(
                        <Select style={{width: 150}} >
                            <Option value="0">全部</Option>
                            <Option value="1">指定停车点</Option>
                            <Option value="2">禁停区</Option>
                        </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="营运模式">
                        {getFieldDecorator('op_mode', {
                        initialValue: '0',
                        rules: [],
                        })(
                        <Select style={{width: 150}} >
                            <Option value="0">全部</Option>
                            <Option value="1">自营</Option>
                            <Option value="2">加盟</Option>
                        </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="加盟授权状态">
                        {getFieldDecorator('op_status', {
                        initialValue: '0',
                        rules: [],
                        })(
                        <Select style={{width: 150}} >
                            <Option value="0">全部</Option>
                            <Option value="1">正常</Option>
                            <Option value="2">异常</Option>
                        </Select>
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" style={{margin: '0 20px'}} onClick={this.handleSubmit}>查询</Button>
                        <Button onClick={this.handleReset}>重置</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const CityForm = Form.create()(OpenCityForm);

// 开通城市表格
class CityTable extends React.Component {
    componentWillMount(){
        this.request()
    }
    state= {
        
    }
    request= ()=>{
        Axios.ajax({url: '/open_city'}).then((res)=>{
            this.setState({
                dataSource: res.item_list.map((item,i)=>{
                    item.key= i
                    return item
                })
            })
        })
    }
    render(){
        const columns= [
            {
                title: '城市ID',
                dataIndex: 'id'
            },
            {
                title: '城市名称',
                dataIndex: 'name'
            },
            {
                title: '用车模式',
                dataIndex: 'mode',
                render(text, record, index){
                    switch(text){
                        case 1 : return <Badge status="success" text='指定停车点'/>; break;
                        case 2 : return <Badge status="warning" text='禁停区'/>; break;
                    } 
                }
            },
            {
                title: '营运模式',
                dataIndex: 'op_mode',
                render: function(text, record, index){
                    switch(text){
                        case 1 : return '自营'; break;
                        case 2 : return '加盟'; break;
                    }
                }
            },
            {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render: function(text, record, index){//前行的值，当前行数据，行索引
                 return text.map((item,i)=>{
                        return item.user_name
                    }).join('，')
                }
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time'
            },
            {
                title: '操作时间',
                dataIndex: 'update_time'
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }
        ]
        console.log(this.state.dataSource)
        return(
            <div className="card_table">
                <Table 
                bordered
                columns= {columns}
                dataSource= {this.state.dataSource}
                />
            </div>
        )
    }
}

// 开通城市弹框
class OpenCityModal extends React.Component{
    render(){
        const {getFieldDecorator} = this.props.form
        // 不按照屏幕宽度布局，直接设置，标题站5分，选择框占19份，但是19份太长，又不想改变标题占的份数，所以直接设置 Select组件的宽度为200,从而改变选择框的宽度，不改变标题的宽度
        const layoutForm= {
            labelCol: {
                span: 5 
            },
            wrapperCol: {
                span: 19 
            }
        }
        return(
            <div>
                <Form>
                    <Form.Item label="选择城市" {...layoutForm}>
                        {
                           getFieldDecorator('selectCity',{
                               initialValue: '1'
                           })(
                             <Select  style={{width: 200}}>
                                 <Option value="1">郑州</Option>
                                 <Option value="2">深圳</Option>
                                 <Option value="3">宁夏</Option>
                                 <Option value="4">海南</Option>
                             </Select>
                           )
                        }
                    </Form.Item>
                    <Form.Item label="用车模式"  {...layoutForm}>
                        {
                           getFieldDecorator('use_city',{
                               initialValue: '1'
                           })(
                            <Select style={{width: 200}}>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                           )
                        }
                    </Form.Item>
                    <Form.Item label="运行模式"  {...layoutForm}>
                        {
                           getFieldDecorator('op_city',{
                               initialValue: '1'
                           })(
                            <Select style={{width: 200}}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                           )
                        }
                    </Form.Item>
                </Form>  
            </div>
        )
    }
}
const OpenCityModalForm= Form.create()(OpenCityModal)