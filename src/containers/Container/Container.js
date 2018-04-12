import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

export const Container = ({ types }) => {
  console.log(types);

  const pokemonTypes = types.map((type, index) => {
    return (
      <button 
        index={type.id}
        className="type-btns">{type.name}</button>
    );
  });

  return (
    <div className="all-types">
      {pokemonTypes}
    </div>
  )
}

Container.propTypes = {
  types: PropTypes.array
}
