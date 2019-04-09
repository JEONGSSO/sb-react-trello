import React, { useReducer, useRef } from 'react';

function reducer(state, action) {
   return {
      ...state,
      [action.name]: action.value,
   }
}

const InfoReducer = ({ }) => {
   const [state, dispatch] = useReducer(reducer, {
      name: '',
      pw: ''
   })

   const { name, pw } = state;

   const handleId = e => {
      dispatch(e.target)
   }
   const handlePw = e => {
      dispatch(e.target)
   }

   return (
      <div>
         <input type="text" name="name" value={name} onChange={handleId} />
         <input type="text" name="pw" value={pw} onChange={handlePw} />
         <div>{name}</div>
         <div>{pw}</div>
      </div>
   )
}

export default InfoReducer;