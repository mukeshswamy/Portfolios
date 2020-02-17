import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navigation.css";
import { Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/images/logo-retina.png";

function Navbar() {
    return (
        <header className="header-bg navbar-fixed">
            <Container>
                <Row>
                    <Col md={5}>
                        <div>
                            <img src={logo} className="logo-img" alt="logo"></img>
                        </div>
                    </Col>
                    <Col md={7}>
                        <nav className="cus-navbar ">
                            <ul className="cus-ul">
                                <li className="link"><NavLink to="/" exact>Home</NavLink></li>
                                <li className="link"><NavLink to="/aboutme" exact >About Me</NavLink></li>
                                <li className="link"><NavLink to="/portfolio" exact >Portfolio</NavLink></li>
                                <li className="link"><NavLink to="/service" exact>Services</NavLink></li>
                                <li className="link"><NavLink to="/contact" exact>Contact</NavLink></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Navbar
