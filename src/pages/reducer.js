import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
if(action.type === "INCREMENT"){
    return { ...state,count: state.count + 1 };
}
else if(action.type === "DECREMENT"){
    return { ...state,count: state.count - 1 };
}
else{
    return state;
};
};

const Counter = () => {
  // Initializing state using useReducer
  const initialState = {name:'Rajat',count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}, Name:{state.name}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

function Reducer() {
  return (
    <div className="asdf">
      <Counter />
    </div>
  );
}


export default Reducer;
