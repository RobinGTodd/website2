import React from 'react';
import resume from '../images/Resume_20220105.pdf'

const About = () => {
return (
  <div className="container">
    <div className="row content-header">
      <div className="col-12 col-sm-9 content-title">
        <h1>Resume</h1>
        <h2> January 2022</h2>
      </div>
      <embed
      src={resume}
      width="100%"
      height="800px"
      type="application/pdf"/>
      </div>

  </div>
);
};

export default About;
