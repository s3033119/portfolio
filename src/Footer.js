import React from 'react';

import './Footer.css';

export default class Footer extends React.Component {
    render(){
        return(
            <div className="Footer">
              <div className="footer-group">
                <div className="footer-content">
                  <h1 className="footer-title">Portfolio</h1>
                  <p>● Tomohiro Hidaka 2020</p>
                </div>
                <div className="footer-content">
                  <h1>Contact</h1>
                  <p><span>Phone:</span> 090 9891 8638</p>
                  <p><span>Email:</span> s3033119@gmail.com</p>
                </div>
              </div>
            </div>
        );
    }
}
