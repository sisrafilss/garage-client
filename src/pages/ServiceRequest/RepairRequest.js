import React from 'react';
import SectionWrapper from '../Shared/ReusableComponents/SectionWrapper';
import PageTopHeader from '../Shared/ReusableComponents/PageTopHeader';
import HeadingH2 from '../Shared/ReusableComponents/HeadingH2';

const RepairRequest = () => {
    return (
       <SectionWrapper>
        <PageTopHeader pageName="What does your car need?" />
            
        <HeadingH2>This is Repair Request Page</HeadingH2>
       </SectionWrapper>
    );
};

export default RepairRequest;