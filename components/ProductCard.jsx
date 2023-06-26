import React from 'react';

const ProductCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
