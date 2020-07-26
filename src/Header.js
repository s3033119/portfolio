import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
            <div className="header">
              <div className="slide" style={backImgStyle}>
                <h1 className="introduction-title">Tomohiro Hidaka's Portfolio</h1>
              </div>
                <Navbar className="navbar" bg="dark" variant="dark">
                  <Nav>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                  </Nav>
                </Navbar>

	    </div>
        );
    }
}
