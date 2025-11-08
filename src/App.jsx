import { useEffect, useState } from "react";

export default function App() {

  const [sec, setSec] = useState(0)
  const [isActive, setActive] = useState(false)

  const startTimer = () => {
    setActive(true);
    // Complete this function
    //setSec(sec => sec + 1);
  };
  const stopTimer = () => {
    setActive(false);
  };
  const resetTimer = () => {
    // Complete this function
    setSec(0);
  };

  useEffect(() => {
    if(isActive) console.log('a副作用関数が実行されました！')
  }, [isActive])

  console.log('test')

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.floor(sec / 60)} mins </span>
      <span> {sec % 60} secs</span>
      <p>現在の isActive: {String(isActive)}</p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
