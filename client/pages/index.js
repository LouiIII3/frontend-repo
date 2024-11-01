// pages/index.js
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://52.79.161.94/api/users");
    const data = await response.json();
    setUsers(data);
  };

  const createUser = async () => {
    const response = await fetch("http:52.79.161.94/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      fetchUsers();
    }
  };

  return (
    <div>
      <h1>Usersjeongseokjin</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={createUser}>Add User</button>
      <p>테스트 글씨입니다.</p>
    </div>
  );
}
