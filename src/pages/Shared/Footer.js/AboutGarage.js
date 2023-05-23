import React from 'react';
import Logo from '../ReusableComponents/Logo';
import BodyText from '../ReusableComponents/BodyText';
import SocialMedia from './SocialMedia';

const AboutGarage = () => {
    return (
        <div className="space-y-3 md:space-y-0">
        <Logo />
        <BodyText className="max-w-sm ">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua.
        </BodyText>
        <SocialMedia />
      </div>
    );
};

export default AboutGarage;