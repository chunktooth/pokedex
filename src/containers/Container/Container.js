import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ types }) => {
  console.log(types);

  const pokemonTypes = types.map((type, index) => {
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
