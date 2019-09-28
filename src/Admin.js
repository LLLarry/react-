import React from 'react'
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './style/common.less'

export default class Admin extends React.Component {
    render(){
        return (
            <Row className="container">
               <Col span={3} className="nav-left">
                   <NavLeft></NavLeft>
               </Col> 
               <Col span={21} className="main">
                  <Header></Header> 
                    <Row className="content">
                        {/* <Home /> */}
                        {this.props.children} 
                        {/* this.props.children是获取组件标签中所有匹配到的组件，然后在这显示，如：在router.js中，匹配到Buttons组件，那么this.props.children，就相当于Bottons组件在此处显示 */}
                    </Row>
                  <Footer></Footer> 
               </Col> 
            </Row>
        )
    }
}