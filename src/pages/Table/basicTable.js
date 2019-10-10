import React from 'react'
import {Card,Table,Button,Modal, message} from 'antd'
import Axios from '../../axios'

export default class BasicTable extends React.Component {
    state= {
        dataSource2: [],
        dataSource3: [],
        selectedRowKeysCheckbox:[]
    }
    componentWillMount(){
        const data= [
            {
                id: 1,
                sex: '男',
                userName: '刘敏敏',
                age: 18,
                like: ['吃饭','睡觉'],
                address: '北京市海淀区奥林匹克公园',
                time: '08:30',
                key: 1 //每一项要有可以，唯一标识
            },
            {
                id: 2,
                userName: '王芳',
                sex: '男',
                age: 18,
                like: ['吃饭','睡觉'],
                address: '北京市海淀区奥林匹克公园',
                time: '08:30',
                key: 2 //每一项要有可以，唯一标识
            },
            {
                id: 3,
                sex: '女',
                userName: '李明',
                age: 18,
                like: ['吃饭','睡觉'],
                address: '北京市海淀区奥林匹克公园',
                time: '08:30',
                key: 3 ,//每一项要有可以，唯一标识
            }
        ]
        this.setState({
            dataSource: data
        })
        //动态加载数据，将数据绑定到组件的state 属性上
        Axios.ajax({
            url: '/tableDetail'
        }).then(res=>{
            this.setState({
                dataSource2: res,
                dataSource3: res,
                dataSource4: res
            })
        }).catch(err=>{
            console.log(err)
        })
        
    }
    handleOnChange= (selectedRowKeys,selectedRows)=>{ //处理表格单选框发生变化是的回调
        console.log(selectedRowKeys,selectedRows) //selectedRowKeys 是选择项的数组 [4] , selectedRows是选择项的详细信息数组 [{id: 4, sex: 1, userName: "武敏", age: 18, like: Array(2), …}]
        //在点击之后，把回调中的 selectedRowKeys 让组件中的 rowSelection中的selectedRowKeys属性使用
        this.setState({
            selectedRowKeys
        })
    }
    handleTableClick= (record)=>{
        console.log(record)
        this.setState({
            selectedRowKeys: [record.id]
        })
        Modal.info({
            title: '你点击的这一项信息',
            content: JSON.stringify(record)
        })
    }

    handleOnChangeCheckbox= (selectedRowKeys,selectedRows)=>{ //处理表格单选框发生变化是的回调
        console.log(selectedRowKeys,selectedRows) //selectedRowKeys 是选择项的数组 [4] , selectedRows是选择项的详细信息数组 [{id: 4, sex: 1, userName: "武敏", age: 18, like: Array(2), …}]
        //在点击之后，把回调中的 selectedRowKeys 让组件中的 rowSelection中的selectedRowKeys属性使用
        this.setState({
            selectedRowKeysCheckbox:selectedRowKeys
        })
    }
    handleTableClickCheckbox= (record)=>{ //点击复选框表格,没有选中的时候选中，选中的时候移除选中
        let {selectedRowKeysCheckbox} = this.state
        let index= selectedRowKeysCheckbox.indexOf(record.id)
        if(index == -1){
            selectedRowKeysCheckbox.push(record.id)
        }else{
            selectedRowKeysCheckbox.splice(index,1)
        }
        this.setState({
            selectedRowKeysCheckbox
        })
    }

    handleDeleteCheckbox= ()=>{
        let {selectedRowKeysCheckbox}= this.state
        Modal.info({
            title: '确认删除',
            content: JSON.stringify(selectedRowKeysCheckbox)
        });
    }
    
    render(){
        // 处理复选框表格
        const {selectedRowKeysCheckbox}= this.state //es6解构语法
        const rowSelection= {
            type: 'checkbox',
            selectedRowKeys: selectedRowKeysCheckbox,
            onChange: this.handleOnChangeCheckbox
        }
        const columns= [ //定义表头，由于表头一般是固定的，所以不需要定义到动态state中，取得时候直接取就行了，不需要this.state.XXX
            {
                title: 'id', //表头标题
                dataIndex: 'id',  //表头索引字段
                key: 'id' //和表头字段一样
            },
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: '爱好',
                dataIndex: 'like',
                key: 'like'
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '起床时间',
                dataIndex: 'time',
                key: 'time'
            },
            {
                title: '操作',
                dataIndex: 'set',
                render: ()=>{
                    return <div><Button type="primary" size="small">编辑</Button> <Button type="danger" size="small">删除</Button></div> //设置删除按钮
                }
            },
        ]
 
        return(
        <div>
            <Card title="基础表格">
                <Table columns={columns} dataSource={this.state.dataSource} bordered={true /*控制表单时候显示边框*/} pagination={false /*是否显示表格分页*/}> 

                </Table>
            </Card>
            
            { //判断dataSource2有没有数据，有就加载，没有就不加载 “动态渲染表格”组件
                this.state.dataSource2.length > 0 ? ( 
                        <Card title="动态渲染表格" style={{margin: '10px 0'}}>
                            <Table columns={columns} dataSource={this.state.dataSource2} > 

                            </Table>
                        </Card>) : ''
            }

            { //判断dataSource3有没有数据，有就加载，没有就不加载 “动态渲染表格”组件
                this.state.dataSource3.length > 0 ? ( 
                        <Card title="单选-表格" style={{margin: '10px 0'}}>
                            <Table 
                            columns={columns} 
                            dataSource={this.state.dataSource3}
                            rowSelection= {
                                {
                                    type: 'radio', //配置radio和checkbox
                                    selectedRowKeys: this.state.selectedRowKeys, //如果指定[2,3]那就选中2，3项,所以要配合onChange使用
                                    onChange: this.handleOnChange  // 当点击选项框的时候，选项框发生改变会调用此方法
                                }
                            }
                           onRow= {
                                (record)=>{ //record是每一项详细信息
                                    return {
                                        onClick: ()=>this.handleTableClick(record) //处理点击表格的时候，将点击的这一项详细给传过去
                                    }
                                }
                                
                           }
                            > 
                            </Table>
                        </Card>) : ''
            }


                { //判断dataSource4有没有数据，有就加载，没有就不加载 “动态渲染表格”组件
                this.state.dataSource3.length > 0 ? ( 
                        <Card title="复选-表格" style={{margin: '10px 0'}}>
                            <div style={{marginBottom: 10}}>
                                <Button type="primary" onClick={this.handleDeleteCheckbox}>删除</Button>
                            </div>
                            <Table 
                            columns={columns} 
                            dataSource={this.state.dataSource4}
                            rowSelection= {rowSelection}
                           onRow= {
                                (record)=>{ //record是每一项详细信息
                                    return {
                                        onClick: ()=>this.handleTableClickCheckbox(record) //处理点击表格的时候，将点击的这一项详细给传过去
                                    }
                                }
                                
                           }
                            > 
                            </Table>
                        </Card>) : ''
            }
           
        </div>
        )
    }
}