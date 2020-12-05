import React from 'react';
import './App.css';
import {WeightTracker} from './WeightTracker';


function App() {
  return (
    <div className="weight-root">
      {weightCalendar.map(weightTracker => <WeightTracker weightTracker={weightTracker}/>)}
    </div>
  );
}

export default App;
