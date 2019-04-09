import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function reducer(state, action) {
   switch (action.type) {
      case INCREMENT:
         return { value: state.value + 1 }
      case DECREMENT:
         return { value: state.value - 1 }
      default:
         return state;
   }
}

const Counter = () => {
   const [state, dispatch] = useReducer(reducer, { value: 0 })  //첫 번째는 리듀서 함수, 두 번째는 리듀서의 기본 값

   return (
      <div>
         <p>
            카운터 값 : <b>{state.value}</b>
         </p>
         <button onClick={() => dispatch({ type: INCREMENT })}>+1</button>
         <button onClick={() => dispatch({ type: DECREMENT })}>-1</button>
      </div>
   )
}

export default Counter;