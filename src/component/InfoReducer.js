import React, { useReducer, useRef } from 'react';

import useInputs from './useInputs'

const InfoReducer = () => {
   const [state, onChange] = useInputs({
      name: '',
      pw: ''
   }) //초기 값 지정

   const { name, pw } = state;

   return (
      <div>
         <input type="text" name="name" value={name} onChange={onChange} />
         <input type="text" name="pw" value={pw} onChange={onChange} />
         <div>이름 : {name}</div>
         <div>비밀번호 : {pw}</div>
      </div>
   )
}

export default InfoReducer;
// import React, { useReducer, useRef } from 'react';

// function reducer(state, action) {
//    return {
//       ...state,
//       [action.name]: action.value,
//    }
// }

// const InfoReducer = ({ }) => {
//    const [state, dispatch] = useReducer(reducer, {
//       name: '',
//       pw: ''
//    })

//    const { name, pw } = state;

//    const handleId = e => {
//       dispatch(e.target)
//    }
//    const handlePw = e => {
//       dispatch(e.target)
//    }

//    return (
//       <div>
//          <input type="text" name="name" value={name} onChange={handleId} />
//          <input type="text" name="pw" value={pw} onChange={handlePw} />
//          <div>{name}</div>
//          <div>{pw}</div>
//       </div>
//    )
// }

// export default InfoReducer;