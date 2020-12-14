import React, {useEffect} from 'react';
import './App.css';
import {WeightTracker} from "./WeightTracker";
import {useSelector, useDispatch} from 'react-redux';
import {loadDay, startAddingEntry} from './actions';
import {ProgressBar} from 'react-fetch-progressbar'

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();



export function App() {

  const weightCalendar = useSelector(state => state.entries);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadDay(month));
  }, [dispatch]);
 
  const onAdd = () => {
    dispatch(startAddingEntry(year, month, day));
  }

  return (
    
    <div className="weight-root">
     
    
      <ProgressBar/>
      <button id="fixedButton" onClick={onAdd}>New Entry</button>
    
      {weightCalendar.map(tracker => <WeightTracker key={tracker.id} tracker={tracker} />)}
      

      
    </div>
  );
}


export default App;