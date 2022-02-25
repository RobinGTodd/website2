import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navigation from '../Components/Navbar/Navbar';
import BlogPost from './BlogPost';
// import About from '../../Pages/About';
// import Portfolio from '../../Pages/Portfolio';



function PageTemplate(props) {
  return (
    <div className='page-template'>
        <Navigation />
        <div className="row">
          <div className="col-12 col-lg-2 col-xl-1">
              <div className='my-name'>
              <h1 className='accent-border-right accent-border-bottom'>Robin<br/>Todd</h1>
              <h2>{props.typename}</h2>
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1"></div>
          <div className="col-12 col-md-12 col-lg-7 page-content">
            {props.type}
          </div>

          <div className="row">
              <div className="container">
                <footer>
                  &copy; Copyright 2022 Robin Todd
                </footer>
            </div>
          </div>

        </div>
    </div>
  );
}

export default PageTemplate;
