import React from 'react'
import {HashRouter,Link,NavLink,Switch,Route} from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import Login from './pages/Login' //登录组件
import NoMatch from './pages/NoMatch' //404组件
import Buttons from './pages/ui/buttons'
import { S } from 'xmlchars/xml/1.0/ed5'
export default class IRouter extends React.Component {
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    {/* 路由中嵌套子路由*/}
                    <Route path="/admin" render= {() => 
                        <Admin>
                            {/* 使用Switch组件，可以值显示匹配的第一项，这就避免了404组件被误匹配 */}
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route component={NoMatch}></Route>
                                {/* 404组件放到最后，当地址栏的路径为/admin/*时都能匹配到404组件，Switch中，前面的都没匹配到，那么只显示404组件 */}
                            </Switch>
                        </Admin>
                    }
                    />
                </App>
            </HashRouter>
        )
    }
}