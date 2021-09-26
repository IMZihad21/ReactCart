import React from 'react';

const Player = (props) => {
    const {name, title, image, rarity, element, weapontype, region, birthday} = props.player;
    console.log(name,title,image,rarity,element,weapontype,region,birthday)
    return (
        <div>
            
        </div>
    );
};

export default Player;