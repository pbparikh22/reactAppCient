import React, {useEffect} from 'react';
import './App.css';
import {WeightTracker} from "./WeightTracker";
import {useSelector, useDispatch} from 'react-redux';
import {loadDay} from './actions';


function App() {

const weightCalendar = useSelector(state => state.entries);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(loadDay(4, 7));
}, [dispatch]);
  return (
    <div className="weight-root">
      {weightCalendar.map(tracker => <WeightTracker key={tracker.id} tracker={tracker} />)}
    </div>
  );
}

export default App;
