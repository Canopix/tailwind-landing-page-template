import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Videos from '../partials/Videos';
import NFT from '../partials/NFT';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden" style={{fontFamily: 'Varela Round'}}>

      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <NFT />
        <Videos />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}

      </main>

      {/*  Site footer */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;