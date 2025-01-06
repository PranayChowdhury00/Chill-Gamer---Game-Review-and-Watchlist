import React from 'react';
import Banner from './Banner';
import UpcomingReleases from './UpcomingReleases';
import GamingTips from './GamingTips';
import PromotionalOffers from './PromotionalOffers ';
import Blog from './Blog';
import TopGames from './TopGames';
import About from './About';



const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <About></About>
            <UpcomingReleases></UpcomingReleases>
            <GamingTips></GamingTips>
            <PromotionalOffers></PromotionalOffers>
            <Blog></Blog>
            <TopGames></TopGames>
        </div>
    );
};

export default Home;