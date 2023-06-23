import { useSelector, useDispatch } from "react-redux"; //custom redux hook

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter) //we bring it over to use it ti check the truthyness of the value

  const incrementHandler = () => {
    dispatch({type: "increment"});
  };
  const increaseHandler = () => {
    dispatch({type: "increase", valueProp: 5})
  };
  const decrementHandler = () => {
    dispatch({type: "decrement"});
  };

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"}); // we dispatch the action here
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>} {/* so it only show it it is truthy */}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
