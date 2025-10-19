import { useState, useEffect } from 'react'

export default function App() {
  // 入力フォームの状態をまとめて管理
  const [form, setForm] = useState({
    name: "",
    age: "",
    active: false,
  });

  // 入力が変わったときに呼ばれる関数
  function handleChange(e){
    const {name, value, type, checked} = e.target;
    const newValue = type === "checkbox" ? checked : value;

    // 状態を上書きする（他の項目はそのまま保持）
    setForm(prev => ({
      ...prev,
      [name]: newValue,
    }))
  }

  // 状態が変わるたびにコンソールに出力
  useEffect(() => {
    console.log("form changed:", form);
 }, [form]);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 20}}>
      <h1>フォーム入力の練習</h1>

      <label>
        名前：
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="例：山田太郎"
        />
      </label>

      <br /><br />
      
      <label>
        年齢：
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
        />
      </label>

      <br /><br />
      
      <label>
        <input
          name="active"
          type="checkbox"
          chacked={form.active}
          onChange={handleChange}
        />
        有効ユーザー
      </label>

      <hr />
      <h3>状態の中身：</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </main>
  );
}

