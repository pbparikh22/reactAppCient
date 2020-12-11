import React, {useEffect} from 'react';
import './App.css';
import {WeightTracker} from './WeightTracker';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay} from './actions';


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();



function App() {

  const weightCalendar = useSelector(state => state.weights);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(loadDay(month, day));
  }, [dispatch]);
  


  return (
    <div className="weight-root">
      {weightCalendar.map(tracker => <WeightTracker key={tracker.id} tracker={tracker} />)}
      
    </div>
  );
}

export default App;
