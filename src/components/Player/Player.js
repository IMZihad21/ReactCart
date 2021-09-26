import React from 'react';

const Player = (props) => {
    const { name, title, image, rarity, element, weapontype, region, birthday, price } = props.player;
    return (
        <div className="bg-gray-100 rounded-xl items-center p-3 m-4">
            <img className="w-1/2 mx-auto border rounded-full " src={image} alt={name} />
            <h1><span className="font-semibold">Name:</span> {name}</h1>
            <p><span className="font-semibold">Title:</span> {title}</p>
            <p className="font-semibold underline">{element + ' ' + weapontype} User</p>
            <p><span className="font-semibold">Region:</span> {region}</p>
            <p><span className="font-semibold">Birthday:</span> {birthday}</p>
            <p><span className="font-semibold">Price:</span> ${price}</p>
            <button onClick={()=> props.handleAddToCart(props.player)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-6 border border-blue-700 rounded-lg">
                Add to Cart
            </button>
        </div>
    );
};

export default Player;