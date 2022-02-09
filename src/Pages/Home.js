import React from 'react';
import headshot from '../images/headshot.jpg'

import Navigation from '../Components/Navbar/Navbar';
import resume from '../images/Resume_20220105.pdf'

const Home = () => {
  return (
    <div className="home" >
      {/* <Navigation /> */}

      <div className="row" id="fill-view">
        {/* <div className="col-12 col-lg-2">
        </div> */}

        <div className="col-12 col-lg-5 left">
          {/* <div className="hexagon"></div> */}
        </div>


        <div className="col-12 col-lg-5">
          <h1>Hi, <br/> I'm Robin</h1>

          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="row">
        <h1>Test</h1>
      </div>

      <div className="row">
        <h1>Test</h1>
      </div>

    </div>

  );
};

export default Home;
