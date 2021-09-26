import React from 'react';

const CartPlayers = (props) => {
    const { name, image, quantity } = props.player;
    return (
        <div className="flex  border-b border-blue-500 p-2">
            <img className="w-1/4 px-2 rounded-full" src={image} alt={name} />
            <h1 className="font-semibold m-auto">{name} x{quantity}</h1>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 border border-red-700 rounded-lg">
                Remove
            </button>
        </div>
    );
};

export default CartPlayers;