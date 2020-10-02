import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions'
import { loggedIn } from './actions/IsLoggedIn'

function App() {

  const counter = useSelector(state => state.count)
  const isLoggedIn = useSelector(state => state.loggedIn)

  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        <h1>Our App</h1>
        <p>Counter: {counter}</p>
        <button className="ui inverted green button" onClick={() => dispatch(increment())}>+</button>
        <button className="ui inverted red button" onClick={() => dispatch(decrement())}>-</button>

        <div className='btns'>
          {!isLoggedIn ?
            <button className="ui inverted violet button" onClick={() => dispatch(loggedIn())}>Login</button>
            :
            <div>

              <button class="ui pink button" onClick={() => dispatch(loggedIn())}>Log out</button>
              <p>You are logged in</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
