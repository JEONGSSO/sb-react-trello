import React, { useState } from 'react';

import Info from "./component/Info";

const App = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>토글</button>
      <hr />
      {visible && <Info />}
    </div>
  )
}

export default App;
