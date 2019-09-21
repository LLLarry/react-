import React from 'react';
import logo from './logo.svg';
import Left from './Left'
import { Button } from 'antd';
import './index.less';

function App() {
  return (
    <div className="tt">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Button type="primary">Primary</Button>
        <h1 className="tt">sdasdasddas</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Left />
      </header>
    </div>
  );
}

export default App;
