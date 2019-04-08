import React, { useState, useEffect } from 'react';

const Info = ({ }) => {

   const [id, setId] = useState('')
   const [pw, setPw] = useState('')

   // 기본적으로 렌더링 되고난 직후마다 실행
   useEffect(() => { 
      console.log('Hook didMount');
   }, [])

   useEffect(() => {
      console.log('Hook update')
   }, [id])

   useEffect( () => {
      console.log('Hook didMount');
      return () => {
         console.log('Hook unMount')
      }
   }, [])

   const handleId = e => {
      setId(e.target.value)
   }
   const handlePw = e => {
      setPw(e.target.value)
   }

   return (
      <React.Fragment>
         <div>
            <input type="text" onChange={handleId} />
            <span><b>{id}</b></span>
         </div>
         <div>
            <input type="text" onChange={handlePw} />
            <span><b>{pw}</b></span>
         </div>
      </React.Fragment>
   );
}

export default Info;