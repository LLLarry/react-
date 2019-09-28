import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './index.less';

 class App extends React.Component{
  render() {
    return (
      <div>
        {this.props.children} 
       {/* this.props.children表示所有的子节点 */}
      </div>
    );
  }
}

export default App;
