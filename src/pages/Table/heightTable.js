import React from 'react'
import {Card,Table,Button,Modal, message} from 'antd'
import Axios from '../../axios'

export default class heightTable extends React.Component {
    state= {
        dataSource: []
    }
    componentWillMount(){
        Axios.ajax({
            url: '/paginationTab'
        }).then(res=>{
          this.setState({
                dataSource: res.list,
            })
        }).catch(err=>{
            console.log(err)
        })

    }
    render(){
        const columns= [ //定义表头，由于表头一般是固定的，所以不需要定义到动态state中，取得时候直接取就行了，不需要this.state.XXX
            {
                title: 'id', //表头标题
                dataIndex: 'id',  //表头索引字段
                key: 'id',//和表头字段一样
                width: 80
            },
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                width: 80
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width: 80
            },
            {
                title: '爱好',
                dataIndex: 'like',
                key: 'like',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                width: 200
            },
            {
                title: '起床时间',
                dataIndex: 'time',
                key: 'time',
                width: 120
            },
            {
                title: '操作',
                dataIndex: 'set',
                render: ()=>{
                    return <div><Button type="primary" size="small">编辑</Button> <Button type="danger" size="small">删除</Button></div> //设置删除按钮
                }
            },
        ]

        const columns2= [ //定义表头，由于表头一般是固定的，所以不需要定义到动态state中，取得时候直接取就行了，不需要this.state.XXX
            {
                title: 'id', //表头标题
                dataIndex: 'id',  //表头索引字段
                key: 'id',//和表头字段一样
                width: 200,
                fixed: 'left',
            },
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName',
                width: 200,
                
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                width: 200,
                fixed: 'left',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width: 200
            },
            {
                title: '爱好',
                dataIndex: 'like',
                key: 'like',
                width: 200
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                width: 200
            },
            {
                title: '起床时间',
                dataIndex: 'time',
                key: 'time',
                width: 200
            },
            {
                title: '操作',
                dataIndex: 'set',
                width: 200,
                render: ()=>{
                    return <div><Button type="primary" size="small">编辑</Button> <Button type="danger" size="small">删除</Button></div> //设置删除按钮
                }
            },
        ]
        return(
            // 头部固定原理，就是给Table 添加个srcoll 属性，属性中定义y轴好高度，当内容高度，高于定义的高度的时候，才会发生滚动，但是，如果只这样会有问题，就是表头与内容有可能不对照，所以我们只需要设置，表头各项的宽度，与内容各项的宽度相同即可
            // 侧边固定，colnum每一项加上width固定宽度，计算出每一项宽度的总和，比如1600，则可以设置scroll 的x属性为1620（比总和大一点），然后找到要固定的列，加上fixed: 'left' 即可
            <div>
               <Card title="头部固定">
                    <Table
                    columns= {columns}
                    dataSource= {this.state.dataSource}
                    scroll= {{y: 240}}
                    ></Table>
               </Card>
               <Card title="左侧-头部固定">
                    <Table
                    columns= {columns2}
                    dataSource= {this.state.dataSource}
                    scroll= {{x: 1650, y:240}}
                    ></Table>
               </Card>
            </div>
        )
    }

}