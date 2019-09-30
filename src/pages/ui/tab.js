import React from 'react'
import { Card,Tabs,Icon } from 'antd'
import './ui.less'
const { TabPane } = Tabs


export default class Tab extends React.Component {
    state= {
        tabList: [
            {tab: '购物',key: 1, content: '购物页面内容'},
            {tab: '旅游',key: 2, content: '旅游页面内容'},
            {tab: '美食',key: 3, content: '美食页面内容'},
            {tab: '娱乐',key: 4, content: '娱乐页面内容'},
        ],
        tabListAndIcon: [
            {tab: {type: 'apple',name: '苹果'},key: 1, content: '苹果内容'},
            {tab: {type: 'android',name: '安卓'},key: 2, content: '安卓内容'},
            {tab: {type: 'windows',name: '微软'},key: 3, content: '微软内容'},
            {tab: {type: 'ie',name: 'IE'},key: 4, content: 'IE内容'},
        ]
    }
    //循环数组，返回成可以使用功能的标签
    handleTabList= ()=>{
       return this.state.tabList.map((item,i)=>{
             return <TabPane tab={item.tab} key={item.key}>{item.content}</TabPane>
        })
    }
   
    handleTabFn= (type)=>{
        console.log(type) //回调type是当前页码
    }
    render(){
        return(
            <div className="tab">
                <Card title="Tab页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleTabFn}>
                            <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                            </TabPane>
                    </Tabs>
                  </Card>

                   {
                        this.state.tabList.length > 0 ? (<Card title="渲染Tab页签">
                           <Tabs defaultActiveKey="2">
                            {this.handleTabList()}
                           </Tabs>
                           </Card>) : ''
                   } 

                    {/* 在页面中进行循环数组，返回成可以使用功能的标签 */}
                   {
                        this.state.tabListAndIcon.length > 0 ? <Card title="带图标的Tab页签">
                            <Tabs defaultActiveKey="3">
                            {
                                this.state.tabListAndIcon.map((item,i)=>{
                                   return <TabPane tab={
                                            <span>
                                            <Icon type={item.tab.type} />
                                            {item.tab.name} 
                                            </span>
                                        }
                                        key={item.key}>
                                            {item.content}
                                        </TabPane>
                                })
                            }
                           </Tabs>
                        </Card> : ''
                   }

            </div>
        )
    }
}