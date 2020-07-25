import React from 'react';

import hero from './images/hero.png';

export default class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div className="slide">
                  <img src={hero} alt="hero"/>
                  <h1 className="introduction-title">Tomohiro Hidaka's Portfolio'</h1>
                </div>
	    </div>
        );
    }
}
