import React, { Component } from 'react';
import './App.css';
import { getTypes } from '../../data/getTypes.js'
import FakeContainer from '../../containers/FakeContainer/'

class App extends Component {

async componentDidMount() {
  const pokeTypes = await getTypes();
  console.log(pokeTypes);

  return pokeTypes;
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
