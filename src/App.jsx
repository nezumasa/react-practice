import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "山田太郎", age: 30 },
    { id: 2, name: "佐藤花子", age: 25 },
  ]);

  // 入力変更
  function handleChange(id, key, value) {
    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, [key]: value } : u))
    );
  }

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
      <h1>配列要素の編集</h1>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {users.map(u => (
          <li key={u.id} style={{ marginBottom: 12 }}>
            <input
              value={u.name}
              onChange={e => handleChange(u.id, "name", e.target.value)}
            />
            <input
              type="number"
              value={u.age}
              onChange={e => handleChange(u.id, "age", e.target.value)}
              style={{ marginLeft: 8 }}
            />
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
