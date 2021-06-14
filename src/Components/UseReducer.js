import React, { useReducer } from 'react';

const initialState = {count: 0};



function Reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw  new Error();
  }
}



function Counters() {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
      <div ClassName="ss">
        No of Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>add</button>
        <button onClick={() => dispatch({type: 'decrement'})}>sub</button>
      </div>
    );
  }

  export default Counters;