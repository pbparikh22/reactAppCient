import React from 'react';

const months = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", 
"Novmeber", "December"];


export function WeightTracker(props) {
    
    const tracker = props.tracker;
    return (
        <div className="tracker">
            <div className="memory-left">
                <span className="year">{tracker.year}</span>
                <span>{months[tracker.month - 1]} {tracker.day}</span>
            </div>
            <div className="memory-right">
                {tracker.message}
            </div>
        </div>
    )
} 