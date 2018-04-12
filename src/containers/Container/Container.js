import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Container = ({ types }) => {
  const pokemonTypes = types.map((type, index) => {
    return (
      <Card {...type} index={type.id} />
    )
  });
}

  render() {
    return (
      <div>
        {pokemonTypes}
      </div>
    );
  }
}

Container.