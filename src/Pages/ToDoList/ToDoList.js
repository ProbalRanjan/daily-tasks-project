import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import useTasks from '../../hooks/useTasks/usetasks';
import './ToDoList.css';
import { Form, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ToDoList = () => {

    const [tasks] = useTasks();
    const task = tasks;
    console.log(task)
    /* const { register, handleSubmit, reset } = useForm();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

    const handleComplete = () => {
        /* fetch(`http://localhost:5000/complete`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                id: task._id
            }
        })
            .then(res => res.json())
            .then(data => console.log(data)); */
        console.log("thik ache")
    }


    /* const onSubmit = data => {
        console.log(data);
        reset()
    } */

    return (
        <div className='container'>
            <div className='section-container'>
                <h2 style={{ color: "#0B204C", fontWeight: "600", textAlign: "center", paddingBottom: "15px" }}>All To-Do List</h2>

                <div>
                    {
                        tasks?.map(task =>
                            <div key={task._id} className='d-flex align-items-center justify-content-between todoList-form mb-3 '>
                                <div>
                                    <input type="checkbox" id={task.task} name={task.task} style={{ width: "16px", height: "16px", marginRight: "10px", cursor: "pointer" }} onClick={handleComplete} />
                                    <label htmlFor={task.task} style={{ fontSize: "20px", fontWeight: "500", cursor: "pointer" }}>{task.task}</label>
                                </div>


                                {/* <button className='edit-button' onClick={handleShow}>
                                    <FontAwesomeIcon icon={faPen} />
                                </button>

                                Modal
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className='fw-bold'>Want to edit your task?</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit(onSubmit)}>
                                            <Form.Group className="mb-3" controlId="formBasicTask">
                                                <Form.Label>Edit now</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    className='input-field'
                                                    defaultValue={task.task}
                                                    {...register("task")}
                                                />
                                            </Form.Group>
                                            <button>Update</button>
                                        </Form>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <button onClick={handleClose} className=''>Close</button>
                                    </Modal.Footer>
                                </Modal> */}
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default ToDoList;   