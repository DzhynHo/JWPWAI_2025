import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Pobieranie danych z zewnętrznego API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // użycie spread do stworzenia nowej tablicy użytkowników
      .then(data => setUsers([...data]));
  }, []); // pusty array => uruchamia się tylko przy pierwszym renderowaniu

  return (
    <div>
      <h2>Lista użytkowników</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
