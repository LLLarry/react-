import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
import Axios from '../../axios'
export default class Header extends React.Component {
    componentWillMount(){
        let timer= null
        this.handleSetTime() //当也页面初始化的时候调用一侧这个方法
        clearInterval(timer)
        timer= setInterval(()=>{ //以后每隔一秒都调用这个方法
            this.handleSetTime()
        },1000)
        //通过jsonp请求天气信息
        let city= '郑州'
        Axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            let weatherPic= res[0].weather_data[0].dayPictureUrl
            let weather= res[0].weather_data[0].weather
            if(res.length >0){
                this.setState({
                    weatherPic,
                    weather
                })
            }
        }).catch((err)=>{
            console.log(err)
        })

    }
    handleSetTime(){
        let nowTimeNum= new Date().getTime() //当前时间的时间戳
        this.setState({
            nowTime:  Util.formateDate(nowTimeNum) //将格式化的时间赋值给nowTime,会自动更新到页面上
        })  
    }
    render(){
        return (
            <Row className="header">
                <Row>
                    <Col span={24} className="userLine">
                        <span className="userName">欢迎，河畔一角</span>
                        <a href="#" className="layOut">退出</a>
                    </Col>
                </Row>
                <Row className="nav-list">
                    <Col span={4} className="nav-list-left">
                        <span>首页</span>
                    </Col>
                    <Col span={20} className="nav-list-right">
                        <span>{this.state.nowTime}</span>
                        <span>
                            <img src={this.state.weatherPic}></img>
                            <span>{this.state.weather}</span>
                        </span>
                    </Col>
                </Row>
            </Row>

        )
    }
}