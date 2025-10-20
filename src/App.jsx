import { useState, useEffect } from 'react'

export default function App() {
  // 入力フォーム
  const [form, setForm] = useState({ name: "", age: "", active: false});
  // ユーザー一覧（配列の状態）
  const [users, setUsers] = useState([]);

  // 共通ハンドラ
  function handleChange(e){
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value}));
  }

  // 追加
  function handleAdd() {
    if (!form.name) return;
    const item = {
      id: crypto.randomUUID(),
      name: form.name,
      age: form.age === "" ? null : Number(form.age),
      active: form.active,
      createAt: Date.now(),
    };
    setUsers(prev => [item, ...prev]); // 先頭に追加
    setForm({ name: "", age: "", active: false}); // リセット
  }

  // 削除
  function handleDelete(id){
    setUsers(prev => prev.filter(u => u.id !== id));
  }

  // activeトグル
  function handleToggle(id){
    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, active: !u.active } : u))
    );
  }

  useEffect(() => {
    console.log("users:", users);
  }, [users]);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 20, maxWidth: 640 }}>
      <h1>配列の状態管理：追加 / 削除 / トグル</h1>

      {/* 入力フォーム */}
      <section style={{ display: "grid", gap: 12, marginBottom: 16 }}>
        <label>
          名前：
          <input name="name" value={form.name} onChange={handleChange} placeholder="例：山田太郎" />
        </label>        
        <label>
          年齢：
          <input name="age" value={form.age} onChange={handleChange} />
        </label>        
        <label>
          <input name="active" type="checkbox" checked={form.active} onChange={handleChange} />
          有効ユーザー
        </label>
        <button onClick={handleAdd}>追加</button>
      </section>

      <hr />

      {/* 一覧レンディング */}
      <section>
        <h3>ユーザー一覧 ({users.length}) </h3>
        {users.length === 0 ? (
          <p>データがありません</p>
        ) : (
          <ul style={({ paddingLeft: 0, listStyle: "none", display: "grid", gap: 8 })}>
            {users.map(u => (
              <li key={u.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 8 }}>
                <div>
                  <strong>{u.name || "(no name)"} </strong>{" "}
                  <span> / 年齢: {u.age ?? "-"}</span>{" "}
                  <span> / active: {String(u.active)}</span>{" "}              
                </div>
                <div style={{ marginTop: 8 }}>
                  <button onClick={() => handleToggle(u.id)}>active切替</button>
                  <button onClick={() => handleDelete(u.id)} style={{ marginLeft: 8 }}>
                    削除
                  </button>
                </div>
              </li>              
            ))}
          </ul>
        )}
      </section>

      <pre style={{ marginTop: 16 }}>{JSON.stringify({ form, users }, null, 2)}</pre>
    </main>
  )

}

