import { useReducer } from 'react';

function reducer(state, action) {
   return {
      ...state,
      [action.name]: action.value
   }
}

export default function useInputs (initialForm) {
   const [state, dispatch] = useReducer(reducer, initialForm)
   const onChange = e => {
      console.log(e.target);
      
      dispatch(e.target)
   }
   return [state, onChange]
}
