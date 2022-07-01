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
                        <h3 className='mb-0 fw-bold'>Task Manager</h3>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <div className='header-link'>
                                <Link to='/'>Home</Link>
                                <Link to='/tasks'>Completed Tasks</Link>
                                <Link to='/todoList'>To-Do</Link>
                                <Link to='/calender'>Calendar</Link>
                                <Link to='/about'>About</Link>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;