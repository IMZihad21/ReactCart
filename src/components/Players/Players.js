import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';

const Players = () => {
    const [ players, setPlayers ] = useState([]);
    
    useEffect(() => {
        fetch('./players.JSON')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])


    return (
        <div className="flex">
            <div className="w-2/3 grid grid-cols-3 p-2">
                {
                    players.map(player => <Player
                        player={player}
                        key={player.id}
                    />)
                }
            </div>
            <div className="w-1/3">
                <Cart />
            </div>
        </div>
    );
};

export default Players;