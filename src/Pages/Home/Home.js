import { faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Home.css';

const Home = () => {

    return (
        <div className='container page-container px-4'>
            <div className='single-section'>
                <h3 style={{ color: "#0B204C", fontWeight: "600" }}><FontAwesomeIcon icon={faPlus} className="pe-2" />Add Task</h3>
                <Form className='form-style'>
                    <Form.Group controlId="task">
                        <Form.Control size="lg" type="text" placeholder="Enter your task" className='input-field' />
                    </Form.Group>

                    <button className='submit-btn ms-0 ms-lg-3'>
                        <p style={{ margin: '0' }}>Add</p>
                    </button>
                </Form>
            </div>
            <div className='single-section' style={{ backgroundColor: "#eaf9f5" }}>
                <h3 style={{ color: "#0B204C", fontWeight: "600" }}><FontAwesomeIcon icon={faListCheck} className="pe-2" />Tasks List</h3>
            </div>
        </div>
    );
};

export default Home;