import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faStar, faPen } from '@fortawesome/free-solid-svg-icons';

import hero from './images/hero.png';

import './Header.css';

export default class Header extends React.Component {
    render(){

        const backImgStyle = {
            backgroundImage:`url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        };

        return(
            <div className="Header">
              <Navbar fixed="top">
                <Nav className="nav">
                  <Nav.Link href="#"><span className="header-icon-wrapper icon-top"><FontAwesomeIcon icon={faHome} className="header-icon"/></span><span className="icon-text">Top</span></Nav.Link>
                  <Nav.Link href="#about"><span className="header-icon-wrapper icon-about"><FontAwesomeIcon icon={faUser} className="header-icon"/></span><span className="icon-text">About Me</span></Nav.Link>
                  <Nav.Link href="#skills"><span className="header-icon-wrapper icon-skills"><FontAwesomeIcon icon={faStar} className="header-icon"/></span><span className="icon-text">Skills</span></Nav.Link>
                  <Nav.Link href="#work"><span className="header-icon-wrapper icon-work"><FontAwesomeIcon icon={faPen} className="header-icon"/></span><span className="icon-text">Work</span></Nav.Link>
                </Nav>

              </Navbar>

              <div className="slide" style={backImgStyle}>
                <h1 className="introduction-title">Tomohiro Hidaka's Portfolio</h1>
              </div>

	    </div>
        );
    }
}
