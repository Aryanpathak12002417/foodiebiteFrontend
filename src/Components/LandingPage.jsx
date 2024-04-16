import React from 'react';
import Hero from './Hero';
import QuickMeal from './QuickMeal';
import Tutorial from './Tutorial';
import OurFocous from './OurFocous'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div>
            <Hero/>
            <QuickMeal/>
            <Tutorial/>
            <OurFocous/>
            <Footer/>
        </div>
    );
}

export default LandingPage;
