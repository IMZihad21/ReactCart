import React from 'react';

const CartPlayers = (props) => {
    const {name, image} = props.player;
    return (
        <div className="flex border-b p-2">
            <img className="w-1/4 px-2" src={image} alt={name} />
            <h1>{name} x1</h1>
        </div>
    );
};

export default CartPlayers;