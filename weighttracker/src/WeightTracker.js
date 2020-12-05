import React from 'react';

const months = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", 
"Novmeber", "December"];


export function WeightTracker(props) {
    
    const weightTracker = props.weightTracker;
    return (
        <div className="weightTracker">
            <div className="memory-left">
                <span className="year">
                    {weightTracker.year}
                </span>
                <span>
                    {months[weightTracker.month - 1]}
                    {weightTracker.day}
                </span>
            </div>
            <div className="memory-right">
                {weightTracker.message}
            </div>
        </div>
    )
} 