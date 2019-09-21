import React from 'react'
import {Menu,Icon} from 'antd'
import './index.less'
// 引进菜单列表
import menuConfig from '../../config/menuConfig'
const {SubMenu}= Menu
export default class NavLeft extends React.Component {
    componentWillMount(){
        const menuList= this.handleMenuConfig(menuConfig)   
        this.setState({
            menuList 
        })
    }
    //处理菜单的生成，使用递归的方法
    handleMenuConfig= (data)=>{
        return data.map((item,i)=>{
             if(item.children && item.children.length > 0){ //判断子节点是否存在，如果存在再次调用this.handleMenuConfig(item.children)，并将结果返回回去
                return (
                    <SubMenu title={item.title} key={item.key}> 
                        {this.handleMenuConfig(item.children)}
                    </SubMenu>
                )
               
             }
             return <Menu.Item key={item.key}>{item.title}</Menu.Item> //这里是没有下面的子元素了
        })
    }
    render(){
        return (<div>
          <div className="logo">
            <img src="/assets/logo-ant.svg" alt="后台管理系统" title="后台管理系统"></img>
            <h1>后台管理系统</h1>
          </div>
          
          <Menu theme="dark">
            {this.state.menuList}

          </Menu>
          
        </div>)
    }
}