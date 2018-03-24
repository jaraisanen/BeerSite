import React from 'react';
import Header from '../filler-components/Header';

const GoogleForm = (props) => (
    <div className="form-container"> 
    <Header 
        title="Panimovierailulle?" 
        p="tai ota muuten vain yhteyttä!"
        handleToggle={props.handleToggle}/>          
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrrcZsQdYPmCHaA6suV_p8Gp91mKYAMi1wYhXa88Ne7yHXKw/viewform?embedded=true"
        width="100%" 
        height="1000" 
        frameBorder="0"
        marginHeight="0"
        marginWidth="0">Loading...</iframe>
    </div>    
);

export default GoogleForm;