import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faStar, faPen } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

export default class Footer extends React.Component {
    render(){
        return(
            <div className="Footer">
              <ul className="footer-link-list">
                <li className="footer-link"><a href="#home"><FontAwesomeIcon icon={faHome} className="footer-link-icon"/>Top</a></li>
                <li className="footer-link"><a href="#about"><FontAwesomeIcon icon={faUser} className="footer-link-icon"/>User</a></li>
                <li className="footer-link"><a href="#skills"><FontAwesomeIcon icon={faStar} className="footer-link-icon"/>Star</a></li>
                <li className="footer-link"><a href="#work"><FontAwesomeIcon icon={faPen} className="footer-link-icon"/>Pen</a></li>
              </ul>
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
