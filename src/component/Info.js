import React, { useState, useEffect } from 'react';

const Info = ({ }) => {

   const [id, setId] = useState('')
   const [pw, setPw] = useState('')

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