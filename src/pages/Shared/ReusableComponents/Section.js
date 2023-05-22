import React from 'react';

const Section = ({children, className}) => {
    return (
        <section className={`${className} my-10 sm:my-12 md:my-16 lg:my-20`}>
            {children}
        </section>
    );
};

export default Section;