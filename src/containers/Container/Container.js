import React from 'react';
import { Card } from '../../components/Card/Card';
import PropTypes from 'prop-types';

export const Container = ({ types }) => {
  const pokemonTypes = types.map((type, index) => {
    console.log(type)

    return (
      <button index={type.id}>{type.name}</button>
    );
  });

  return (
    <div>
      {pokemonTypes}
    </div>
  )
}

Container.propTypes = {
  types: PropTypes.array
}