// src/Components/ItemDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Items from './Items';

const ItemDetails = () => {
  const { id } = useParams();
  const item = Items.find(item => item.id === parseInt(id));

  if (!item) return <div>Item not found</div>;

  return (
    <div className='item-detail'>
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      
    </div>
  );
}

export default ItemDetails;
