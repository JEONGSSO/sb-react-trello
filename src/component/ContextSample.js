import React, { createContext, useContext } from 'react';

const ContextSample = () => {
   const theme = useContext(createContext('black'));
   const style = {
      background: theme
   };
   return <div style={style}></div>
}

export default ContextSample;