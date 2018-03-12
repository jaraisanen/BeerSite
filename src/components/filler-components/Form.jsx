import React from 'react';

const GoogleForm = (props) => (
    <div className="form-container"> 
      <h2>Panimovierailulle?</h2>
      <p>Jätä yhteydenottopyyntö</p>
              
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrrcZsQdYPmCHaA6suV_p8Gp91mKYAMi1wYhXa88Ne7yHXKw/viewform?embedded=true"
        width="100%" 
        height="1000" 
        frameBorder="0"
        marginHeight="0"
        marginWidth="0">Loading...</iframe>
    </div>    
);

export default GoogleForm;