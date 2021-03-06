import React from 'react';
import Rating from 'react-rating';

const Player = (props) => {
    const { name, title, image, rarity, element, weapontype, region, birthday, price } = props.player;
    return (
        <div className="bg-gray-200 shadow-lg rounded-xl items-center p-3 mx-2 my-4">
            <img className="w-1/2 mx-auto border rounded-full " src={image} alt={name} />
            <Rating
                initialRating={rarity}
                readonly
                emptySymbol="far fa-star text-yellow-400"
                fullSymbol="fas fa-star text-yellow-400"
            />
            <h1><span className="font-semibold text-blue-500">Name:</span> {name}</h1>
            <p><span className="font-semibold text-blue-500">Title:</span> {title}</p>
            <p className="font-semibold text-blue-700">{element + ' ' + weapontype} User</p>
            <p><span className="font-semibold text-blue-500">Region:</span> {region}</p>
            <p><span className="font-semibold text-blue-500">Birthday:</span> {birthday}</p>
            <p><span className="font-semibold text-blue-500">Price:</span> ${price}</p>
            <button onClick={() => props.handleAddToCart(props.player)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-6 border border-blue-700 rounded-lg">
            <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    );
};

export default Player;