// src/Components/ItemCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <div className='item-card'>
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <Link to={`/detail/${item.id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default ItemCard;
