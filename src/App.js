import React, { Component } from 'react';
import './App.css';
import Sketch from '../src/components/Layout/Sketch';
import TabsContainer from '../src/components/TabsContainer';
import { Menu } from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sketch sider={<Menu />} content={<TabsContainer />} />
      </div>
    );
  }
}

export default App;
