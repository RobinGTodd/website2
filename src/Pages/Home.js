import React from 'react';
import headshot from '../images/headshot.jpg';

import Navigation from '../Components/Navbar/Navbar';
// import About from '../Pages/About';
import './Home.scss';

import {useNavigate } from "react-router-dom";







const Home = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/about');
  // }
  
  return (
    <div className="home" >
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-1"></div>
          <div className="col-12 col-md-6 col-lg-4">
            <h1 className="accent-border-right accent-border-bottom">Robin<br />Todd</h1>
          </div>
          <div className="col-12 col-lg-6">
            <h2>Focused on efficient workflows.</h2>
            <h3>Data scientist, software engineer</h3>

          </div>

        </div>

        <div className="row">
          <div className="col-12 col-lg-3">

          </div>

          <div className="row">
            <div className="col-12 col-lg-1 test">
            </div>

            <div className="col-12 col-lg-10 test">
              {/* <h2>Recent Work- porfolio-widget component</h2> */}
            </div>

            <div className="col-12 col-lg-1 test">
            </div>


          </div>

          <div className="col-12 col-lg-9 section1">
            <h2>
              My background
            </h2>
            <img src={headshot} className='headshot' alt='headshot of Robin'/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button onClick={() => navigate('/about')}>
              Learn More
            </button>
            
          </div>
        </div>



      </div>
      <div className="container">
        <footer>
          &copy; Copyright 2022 Robin Todd
        </footer>
      </div>

    </div>

  );
};

export default Home;





// import React from 'react';
// import headshot from '../images/headshot.jpg';
// import pic04 from '../images/pic04.jpg';
// import airview from '../images/airview.jpg';

// import Navigation from '../Components/Navbar/Navbar';
// import resume from '../images/Resume_20220105.pdf';

// const Home = () => {
//   return (
//     <div className="home" >
//       <Navigation />

//       <div className="row hero" id="fill-view">
//         <div className="col-12 col-lg-1"></div>
//         <div className="col-12 col-lg-2">
//           <h1>Robin<br />Todd</h1>
//         </div>
//         <div className="col-12 col-lg-1"></div>
//         <div className="col-12 col-lg-6">
//           <h2>Focused on efficient workflows.</h2>
//           <h3>Data scientist, software engineer</h3>
//         </div>

//       </div>

//       <div className="row double-color">
//         <div className="col-12 col-lg-3"></div>
//         <div className="col-12 col-lg-4">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//           </p>
//         </div>


//         <div className="col-12 col-lg-4">
//           <img src={airview} width='100%' className='blurred'/>
//         </div>
//         <div className="col-12 col-lg-1"></div>

//         {/* <h1>Test</h1>
//          */}
//       </div>

//     </div>

//   );
// };

// export default Home;
