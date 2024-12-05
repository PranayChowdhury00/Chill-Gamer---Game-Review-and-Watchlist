import React from 'react';
import Banner from './Banner';
import UpcomingReleases from './UpcomingReleases';
import GamingTips from './GamingTips';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UpcomingReleases></UpcomingReleases>
            <GamingTips></GamingTips>
        </div>
    );
};

export default Home;