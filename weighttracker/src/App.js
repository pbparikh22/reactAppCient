import React, {useEffect} from 'react';
import './App.css';
import {WeightTracker} from './WeightTracker';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay} from './actions';

function App() {

  const weightCalendar = useSelector(state => state.weightCalendar);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(loadDay(4, 7));
  }, [dispatch]);
  


  return (
    <div className="weight-root">
      {weightCalendar.map(weight => <WeightTracker key={weight.id} weight={weight} />)}
    </div>
  );
}

export default App;
