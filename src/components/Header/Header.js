import React from 'react';

const Header = () => {
    return (
        <div className="shadow-lg bg-gray-200 px-2 py-4 rounded-lg">
            <h1 className="text-4xl font-bold pb-4 ">Genshin Characters</h1>
            <p className="text-xl pb-2"><strong>Make A Dream Team</strong> With the amazing characters below, lets build a strong party for Genshin Impact</p>
            <h1 className="text-2xl">Total budget around <span className="font-bold text-blue-500">${174}</span> Million</h1>
        </div>
    );
};

export default Header;