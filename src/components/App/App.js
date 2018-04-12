import React, { Component } from 'react';
import './App.css';
import { getTypes } from '../../data/getTypes';
import { catchPokemons } from '../../data/catchPokemons';
import { loadTypes, 
  loadPokemons } from '../../actions/index';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container } from '../../containers/Container/Container';
import loading from '../../loading.gif';

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
  console.log(pokemons);

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
    
  this.props.loadTypes(pokeTypes);
  this.props.loadPokemons(pokemons);
}

  render() {
    return (
      <div>  
        {
          this.state.loading &&
          <img src={ loading } alt="loading..." className='loading-screen '/>
        }
        {
          !this.state.loading &&
          <div>
            <div className='App'>
              <h1 className='header'> POKéDEX </h1>
            </div>
            <Container types={this.props.types} />
          </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  types: PropTypes.array,
  loadTypes: PropTypes.func,
  loadPokemons: PropTypes.func
};

const mapStateToProps = (state) => ({
  types: state.types,
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({ 
  loadTypes: (types) => (dispatch(loadTypes(types))),
  loadPokemons: (pokemons) => (dispatch(loadPokemons(pokemons)))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);