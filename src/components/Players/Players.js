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
        <div>
            <div>
                {
                    players.map(player => <Player
                        player={player}
                        key={player.id}
                    />)
                }
            </div>
            <div>
                <Cart />
            </div>
        </div>
    );
};

export default Players;