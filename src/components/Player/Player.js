import React from 'react';

const Player = (props) => {
    const {name, title, image, rarity, element, weapontype, region, birthday} = props.player;
    return (
        <div>
            <img src={image} alt="" />
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Player;