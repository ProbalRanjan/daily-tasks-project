import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#5A55CA", padding: "15px 0" }}>
                <Container>
                    <Link to='/' className='text-decoration-none text-white'>
                        <h3 className='mb-0'>Task Manager</h3>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav">
                            <div className='nav-links'>
                                <Nav.Link>
                                    <Link to='/'>Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/tasks'>Completed Tasks</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/todo'>To-Do</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/calender'>Calendar</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/about'>About</Link>
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;