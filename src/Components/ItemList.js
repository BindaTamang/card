
import React from 'react';
import ItemCard from './ItemCard';
import Items from './Items';

const ItemList = () => {
  return (
    <div className='item-list'>
      {Items.map((item) => (
        <ItemCard key={item.id} item={item} onView={viewDetails}/>
      ))}
    </div>
  );
};

export default ItemList;
