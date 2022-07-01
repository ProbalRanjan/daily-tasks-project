import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div className='container section-container'>
            <h2 style={{ color: "#0B204C", fontWeight: "600", textAlign: "center", paddingBottom: "15px" }}>My Calender</h2>
            <div className='d-flex justify-content-center'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default MyCalendar;