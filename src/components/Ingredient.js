import React from 'react';

function Ingredient({name,amount}) {
    return (
        <>
            <li><span>{name}</span><span>{amount}</span></li>
        </>
    );
}

export default Ingredient;