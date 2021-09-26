import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';

const Players = () => {
    const [ players, setPlayers ] = useState([]);
    const [ selectedPlayers, setSelectedPlayers ] = useState([]);

    useEffect(() => {
        fetch('./players.JSON')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])

    const handleAddToCart = (player) => {
        if (selectedPlayers.indexOf(player) !== -1) {
            let newPlayers = [...selectedPlayers];
            newPlayers.forEach(item => {
                if (item.id === player.id){
                  item.quantity += 1;
                }
               });
            setSelectedPlayers([...newPlayers]);
        }
        else {
            player.quantity = 1;
            setSelectedPlayers([...selectedPlayers, player]);
        }
    }


    return (
        <div className="flex">
            <div className="w-2/3 grid grid-cols-3">
                {
                    players.map(player => <Player
                        player={player}
                        key={player.id}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="w-1/3">
                <Cart
                    selectedPlayers={selectedPlayers}
                />
            </div>
        </div>
    );
};

export default Players;