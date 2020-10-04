import React, { useEffect, useState } from 'react';
import { getTest } from './services';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTest().then(res => setData(res));
  }, []);

  return data ? (
      <>
        <h1>Hello, world!</h1>
        <p>{data.message}</p>
      </>
    ) : (
      <p>Loading...</p>
    );
};

export default App;
