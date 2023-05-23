import React from 'react';
import HeadingH5 from '../ReusableComponents/HeadingH5';
import MenuItem from '../Header/MenuItem';

const UsefulLinks = () => {
    return (
        <div className="space-y-3 md:space-y-0">
          <HeadingH5 className="text-xl font-semibold">Useful Links</HeadingH5>
          <div className="flex flex-col">
            <MenuItem></MenuItem>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/services">Service</MenuItem>
            <MenuItem to="/login">Login</MenuItem>
          </div>
        </div>
    );
};

export default UsefulLinks;