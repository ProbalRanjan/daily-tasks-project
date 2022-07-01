import { faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useTasks from '../../hooks/useTasks/usetasks';
import './Home.css';

const Home = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [tasks] = useTasks();

    const onSubmit = data => {
        const url = "http://localhost:5000/tasks";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(() => {
                reset()
            })
    }

    return (
        <div className='container page-container px-4'>
            <div className='single-section my-auto'>
                <h3 style={{ color: "#0B204C", fontWeight: "600" }}><FontAwesomeIcon icon={faPlus} className="pe-2" />Add Task</h3>

                <Form className='form-style' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="task">
                        <Form.Control size="lg" type="text" placeholder="Enter your task" className='input-field'
                            {...register("task", {
                                required: {
                                    value: true,
                                    message: 'Enter a task first!!'
                                }
                            })} />
                    </Form.Group>
                    <button className='submit-btn ms-0 ms-lg-3'>
                        <p style={{ margin: '0' }}>Add</p>
                    </button>
                    {errors.task?.type === 'required' && <p style={{ color: "#F26950" }}>{errors.task.message}</p>}
                </Form>

            </div>
            <div className='single-section' style={{ backgroundColor: "#eaf9f5" }}>
                <h3 style={{ color: "#0B204C", fontWeight: "600" }}><FontAwesomeIcon icon={faListCheck} className="pe-2" />Tasks List</h3>

                <div className='task-list'>
                    {
                        tasks.map(task =>
                            <h5 key={task._id}>{task.task}</h5>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;