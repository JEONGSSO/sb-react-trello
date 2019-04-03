import React, { useState, useEffect } from 'react';

const Info = ({ }) => {

   const [id, setId] = useState('')
   const [pw, setPw] = useState('')

   useEffect(() => {
      console.log('effect');
      console.log(id);
      return () => {
         console.log('clean');
         console.log(id);
      }
   },[])

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
            {/* <input type="text" onChange={handleId}  value={id || ''}/> */}
         </div>
         <div>
            <input type="text" onChange={handlePw} />
            {/* <input type="text" onChange={handlePw} value={pw || ''}/> */}
         </div>
         <div>
            <b>{id}</b>
         </div>
         <div>
            <b>{pw}</b>
         </div>
      </React.Fragment>
   );
}

export default Info;