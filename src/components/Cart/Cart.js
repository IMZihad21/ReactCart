import CartPlayers from '../CartPlayers/CartPlayers';

const Cart = (props) => {
    const { selectedPlayers } = props;
    let totalQuantity = 0;
    let totalPrice = 0;
    for (const player of selectedPlayers) {
        totalPrice += player.price * player.quantity;
        totalQuantity += player.quantity;
    }
    return (
        <div className="rounded-lg p-4 mx-2 my-4 bg-gray-100">
            <h1 className="font-bold pb-2">Total Item selected: {totalQuantity}</h1>
            <h1 className="font-bold pb-2">Total Price: ${totalPrice}</h1>
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