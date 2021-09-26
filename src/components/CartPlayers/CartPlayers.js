import React from 'react';

const CartPlayers = (props) => {
    const {name, image, quantity} = props.player;
    return (
        <div className="flex border-b p-2">
            <img className="w-1/4 px-2" src={image} alt={name} />
            <h1>{name} x{quantity}</h1>
        </div>
    );
};

export default CartPlayers;