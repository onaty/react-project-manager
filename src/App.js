import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/layout/navbar'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {/* <h1>We are here</h1> */}
        <Navbar />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
