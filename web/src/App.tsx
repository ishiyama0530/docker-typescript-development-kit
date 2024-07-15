import { useState, useEffect } from "react";
import "./App.css";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>with Express.js in Docker</h2>
      <div>
        <h2>API response</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
