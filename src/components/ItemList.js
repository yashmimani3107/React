import React from 'react';
import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          {/* Text and description on the left */}
          <div className="flex-grow">
            <span className="m-2 font-bold">{item.card.info.name} - </span>
            <span>
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}{' '}
              ₹
            </span>
            <p className="text-gray-600 mt-1">{item.card.info.description}</p>
          </div>

          {/* Image and Add button on the right */}
          <div className="relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-36 h-24 object-cover ml-4 rounded-lg"
            />
            {/* Add button */}
            <button className="absolute bottom-1 right-1 bg-green-500 text-white px-2 py-1 rounded-lg shadow-lg">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
