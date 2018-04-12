import React, { Component } from 'react';
import './App.css';
import { getTypes } from '../../data/getTypes';
import { connect } from 'react-redux';
import Container from '../../containers/Container';

class App extends Component {

async componentDidMount() {
  const pokeTypes = await getTypes();
  console.log(pokeTypes);

  this.props.loadTypes(pokeTypes);
}

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <Container types={this.props.types} />
      </div>
    );
  }
}

App.propTypes = {
  types: PropTypes.array,
  loadTypes: PropTypes.func
};

const mapStateToProps = (state) => ({
  types: state.types
});

const mapDispatchToProps = (dispatch) => ({ 
  loadTypes: () => dispatch(loadTypes(types))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);