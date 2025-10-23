import { useState } from 'react'

export default function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(show => !show)}>Show / Hide</button>
      {show ? <h1>test</h1> : null}
    </div>
  );
}
