import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'

class App extends Component {

  getTypes = async (types) => {
    try {
      const response = await fetch('localhost:3001/types', {
        method: 'GET',
        body: JSON.stringify(types);
        headers: {
          'content-type': 'application/json';
        }
      });
      console.log(response);
      
      return response;
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
