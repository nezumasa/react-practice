import { useState } from 'react'

export default function App() {
  // countという変数と、それを更新する関数setCountを用意
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 20}}>
      <h1>Hello React</h1>
      <p>現在のカウント: {count}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8}}>
        reset
      </button>
    </main>
  );
}

