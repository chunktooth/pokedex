import React from 'react';

export const Card = ({ type }) => {
  console.log(type);

  return (
    <div>
      <h1>{type.name}</h1>
    </div>
  )
}