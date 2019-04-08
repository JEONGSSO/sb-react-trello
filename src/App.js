import React, { useState } from 'react';

import Info from "./component/Info";
import InfoClass from './component/InfoClass'

const App = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>토글</button>
      <hr />
      {visible && <Info />}

      <div>
        sdd
        <InfoClass/>
      </div>
    </div>
  )
}

export default App;
