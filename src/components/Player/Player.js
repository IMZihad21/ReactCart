import React from 'react';

const Player = (props) => {
    const { name, title, image, rarity, element, weapontype, region, birthday } = props.player;
    return (
        <div className="border rounded-lg items-center m-4">
            <img className="w-1/2 mx-auto" src={image} alt="" />
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Player;