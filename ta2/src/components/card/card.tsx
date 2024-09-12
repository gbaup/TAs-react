import cardProps from "../../interfaces/cardProps.ts";
import React from 'react';
import './style.css';


const Card: React.FC<cardProps> = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;

