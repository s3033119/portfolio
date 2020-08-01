import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faStar, faPen } from '@fortawesome/free-solid-svg-icons';

import MediaQuery from "react-responsive";

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
              {/* PC用 */}
              <MediaQuery query="(min-width: 1024px)">
                <Navbar fixed="top">
                  <Navbar.Brand>
                    <h1 className="navbar-title">Portfolio</h1>
                    <p  className="navbar-subtitle">● Tomohiro Hidaka 2020</p>
                  </Navbar.Brand>
                  <Nav className="nav">
                    <Nav.Link href="#home"><span className="header-icon-wrapper icon-top"><FontAwesomeIcon icon={faHome} className="header-icon"/></span><span className="icon-text">Top</span></Nav.Link>
                    <Nav.Link href="#about"><span className="header-icon-wrapper icon-about"><FontAwesomeIcon icon={faUser} className="header-icon"/></span><span className="icon-text">About</span></Nav.Link>
                    <Nav.Link href="#skills"><span className="header-icon-wrapper icon-skills"><FontAwesomeIcon icon={faStar} className="header-icon"/></span><span className="icon-text">Skills</span></Nav.Link>
                    <Nav.Link href="#work"><span className="header-icon-wrapper icon-work"><FontAwesomeIcon icon={faPen} className="header-icon"/></span><span className="icon-text">Work</span></Nav.Link>
                  </Nav>
                </Navbar>
              </MediaQuery>
              {/* スマホ用 */}
              <MediaQuery query="(max-width: 1024px)">
                <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top">
                  <Navbar.Brand>
                    <h1 className="navbar-title">Portfolio</h1>
                    <p  className="navbar-subtitle">● Tomohiro Hidaka 2020</p>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav">
                      <Nav.Link href="#home"><FontAwesomeIcon icon={faHome}/>Top</Nav.Link>
                      <Nav.Link href="#about"><FontAwesomeIcon icon={faUser}/> About</Nav.Link>
                      <Nav.Link href="#skills"><FontAwesomeIcon icon={faStar}/>Skills</Nav.Link>
                      <Nav.Link href="#work"><FontAwesomeIcon icon={faPen}/>Work</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
            </Navbar>
              </MediaQuery>
                <div className="slide" style={backImgStyle}>
                  <h1 className="introduction-title">Tomohiro Hidaka's Portfolio</h1>
                </div>


	    </div>
        );
    }
}
