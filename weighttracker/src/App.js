import React, {useEffect} from 'react';
import './App.css';
import {WeightTracker} from "./WeightTracker";
import {useSelector, useDispatch} from 'react-redux';
import {loadDay, startAddingEntry} from './actions';


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const goal = 0;
const curweight = 0;


function App() {

  const weightCalendar = useSelector(state => state.entries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDay(month, day));
  }, [dispatch]);
 
  const onAdd = () => {
    dispatch(startAddingEntry(year, month, day, goal, curweight));
  }

  return (
    <div className="weight-root">
      <button onClick={onAdd}>New Entry</button>
      {weightCalendar.map(tracker => <WeightTracker key={tracker.id} tracker={tracker} />)}
    </div>
  );
}


export default App;