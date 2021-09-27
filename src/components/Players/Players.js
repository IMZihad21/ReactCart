import React, { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../../utility/localStorage/localStorage';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';

const Players = () => {
    const [ players, setPlayers ] = useState([]);
    const [ selectedPlayers, setSelectedPlayers ] = useState([]);

    useEffect(() => {
        fetch('./players.JSON')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    useEffect(() => {
        const storage = getStorage();
        setSelectedPlayers(storage);
    }, []);

    useEffect(() => {
            setStorage(selectedPlayers);
    }, [selectedPlayers]);

    const handleAddToCart = (player) => {
        if (selectedPlayers.indexOf(player) !== -1) {
            let newPlayers = [ ...selectedPlayers ];
            newPlayers.forEach(item => {
                if (item.id === player.id) {
                    item.quantity += 1;
                }
            });
            setSelectedPlayers([ ...newPlayers ]);
        }
        else {
            player.quantity = 1;
            setSelectedPlayers([ ...selectedPlayers, player ]);
        }
    }

    const handleRemoveFromCart = player => {
        const uniqueKey = player.id;
        let newPlayers = [ ...selectedPlayers ];
        const matchedPlayer = newPlayers.find(item => item.id === uniqueKey);
        if (matchedPlayer){
            const index = newPlayers.indexOf(matchedPlayer);
            newPlayers.splice(index, 1);
            setSelectedPlayers(newPlayers);
        }
    };


    return (
        <div className="md:flex">
            <div className="md:w-2/3 grid md:grid-cols-3 grid-cols-2">
                {
                    players.map(player => <Player
                        player={player}
                        key={player.id}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="md:w-1/3">
                <Cart
                    selectedPlayers={selectedPlayers}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default Players;