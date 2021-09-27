import CartPlayers from '../CartPlayers/CartPlayers';

const Cart = (props) => {
    const { selectedPlayers, handleRemoveFromCart } = props;
    let totalQuantity = 0;
    let totalPrice = 0;
    for (const player of selectedPlayers) {
        totalPrice += player.price * player.quantity;
        totalQuantity += player.quantity;
    }
    return (
        <div className="rounded-lg p-4 mx-2 my-4 shadow-lg bg-gray-200">
            <h1 className="font-bold pb-2">Total Item selected: {totalQuantity}</h1>
            <h1 className="font-bold pb-2">Total Price: ${totalPrice}</h1>
            <div className="border border-blue-500 rounded-lg my-2">
                {
                    selectedPlayers.map(player => <CartPlayers
                        player={player}
                        key={Math.random()}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />)
                }
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-24 py-3 my-2 border border-green-700 rounded-lg">
                Buy Now
            </button>
        </div>
    );
};

export default Cart;