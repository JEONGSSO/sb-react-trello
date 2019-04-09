import React, { useState } from 'react';

import Info from "./component/Info";
import InfoClass from './component/InfoClass';
import ContextSample from './component/ContextSample';
import Counter from './component/ReducerSample'
import InfoReducer from './component/InfoReducer'

const App = () => {

  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>토글</button>
      <hr />

      <InfoReducer/>
      {/* <Counter></Counter> */}
      {/* <ContextSample/> */}
      {/* <div>
        <span>Hook</span>
        {visible && <Info />}
      </div>
      <div>
        <span>Class</span>
        {visible && <InfoClass /> }
      </div> */}
    </div>
  )
}

export default App;
