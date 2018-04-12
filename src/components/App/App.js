import React, { Component } from 'react';
import './App.css';
import { getTypes } from '../../data/getTypes';
import { catchPokemons } from '../../data/catchPokemons';
import { loadTypes } from '../../actions/index';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container } from '../../containers/Container/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

async componentDidMount() {
  const pokeTypes = await getTypes();
  const pokemons = await catchPokemons();
  this.props.loadTypes(pokeTypes);
  this.props.loadPokemons(pokemons);
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
  loadTypes: (types) => (dispatch(loadTypes(types)))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);