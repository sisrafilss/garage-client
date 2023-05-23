import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({className}) => {
    return (
        <NavLink to="/" className={`${className} font-bold`}>GARAGE</NavLink>
    );
};

export default Logo;