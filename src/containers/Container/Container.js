import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { loadTypes } from '../../actions';
class Container extends Component {

  render() {
    return (
      <div>
        <button onClick={()=> {
          this.props.fakeAction()
          alert('FAKE')
        }}> FAKE </button>
      </div>
    );
  }
}

Container.propTypes = {
  fakeAction: func.isRequired
};

const mapStateToProps = (state) => ({
  types: state.types
});

const mapDispatchToProps = (dispatch) => ({ 
  loadTypes: () => dispatch(loadTypes());
});
export default connect(mapStateToProps, mapDispatchToProps)(Container);
