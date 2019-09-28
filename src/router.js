import React from 'react'
import {HashRouter,Link,NavLink,Switch,Route} from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import Login from './pages/Login' //登录组件
import Buttons from './pages/ui/buttons'
export default class IRouter extends React.Component {
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    {/* 路由中嵌套子路由*/}
                    <Route path="/admin" render= {() => 
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}></Route>
                        </Admin>
                    }
                    />
                </App>
            </HashRouter>
        )
    }
}