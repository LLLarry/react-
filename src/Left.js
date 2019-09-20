import React from 'react'

export default class Left extends React.Component {
    constructor(props){
        super(props) /**super函数指向的是构造函数的this，如果不执行super的话，super后面的this不能使用，如果后面有数据的话必须调用super */
        this.state= {
            name: '这是left组件',
            num: 5
        }
    }
     /**react的方法有两种： 1这种方法 在html标签中bind(this) */
    handleAddNum(){
    this.setState({ /**更新state中的数据用 this.setState()这个方法 */
        num: this.state.num+1
    })
    }
    /**react的方法有两种：  1这种方法 在html标签中不bind(this)*/
    handleRemNum= ()=>{
        this.setState({
            num: this.state.num-1
        })
    }
    render(){
        return <div>
            <ul>
                <li>{this.state.num}<button onClick={this.handleAddNum.bind(this)}>点击添加1</button> <button onClick={this.handleRemNum}>点击减少</button></li>
            </ul>
             
              
        </div>
    }
}