import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode, startSavingEntry, startDeletingEntry} from './actions';

const months = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", 
"Novmeber", "December"];


export function WeightTracker(props) {
    
    const tracker = props.tracker;
    const dispatch = useDispatch();

    const [year, setYear] = useState(tracker.year);
    const [month, setMonth] = useState(tracker.month);
    const [day, setDay] = useState(tracker.day);
    const [goal, setGoal] = useState(tracker.goal);
    const [curweight, setCurWeight] = useState(tracker.curweight);
    const [message, setMessage] = useState(tracker.message);


    

    const onEdit = () => {
        dispatch(enterEditMode(tracker));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(tracker));
    }

    const onSave = () => {
        dispatch(startSavingEntry({
            id: tracker.id,
            year,
            month,
            day,
            goal,
            curweight,
            message,
        }));
    }

    const onDelete = () => {
        dispatch(startDeletingEntry(tracker));
    }

    if (tracker.isEditing) {
        return (
            <div className="tracker">
                <div className="memory-left">
                    <input placeholder="Year" type="text" value={year} onChange={e => setYear(parseInt(e.target.value))}/>
                    <input placeholder="Month" type="text" value={month} onChange={e => setMonth(parseInt(e.target.value))}/>
                    <input placeholder="Day" type="text" value={day} onChange={e => setDay(parseInt(e.target.value))}/>
                    <p>Goal Weight: </p><input placeholder="Goal Weight" type="text" value={goal} onChange={e => setGoal(parseInt(e.target.value))}/>
                    <p>Current Weight: </p><input placeholder="Current Weight" type="text" value={curweight} onChange={e => setCurWeight(parseInt(e.target.value))}/>
                    <button onClick={onSave}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                    <button className="delete-button" onClick={onDelete}>Delete</button>
                </div>
                <div className="memory-right">
                    <textarea placeholder="Thoughts and Ideas!!" value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="tracker">
                <div className="memory-left">
                    <span className="year">{tracker.year}</span>
                    <span>{months[tracker.month - 1]} {tracker.day}</span>
                    <p>Goal: <span>{tracker.goal} </span></p> 
                    <p>Current: <span>{tracker.curweight}</span></p>
                    <button onClick={onEdit}>Edit</button>
                </div>
                <div className="memory-right">
                    {tracker.message}
                </div>
            </div>
        );
    }

    
} 