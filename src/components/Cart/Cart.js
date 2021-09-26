import React from 'react';
import CartPlayers from '../CartPlayers/CartPlayers';

const Cart = (props) => {
    const { selectedPlayers } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of selectedPlayers) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    return (
        <div className="rounded-lg p-4 my-4 bg-gray-100">
            <h1 className="font-bold pb-2">Total Item selected: {totalQuantity}</h1>
            <h1 className="font-bold pb-2">Total Price: ${total}</h1>
            <div className="border-4 rounded-lg my-2">
                {
                    selectedPlayers.map(player => <CartPlayers
                        player={player}
                        key={Math.random()}
                    />)
                }
            </div>
        </div>
    );
};

export default Cart;