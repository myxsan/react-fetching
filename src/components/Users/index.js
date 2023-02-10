import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      // .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}

      {users.map((user, i) => (
        <div key={i}>{user.name.toString()}</div>
      ))}
    </div>
  );
}

export default Users;
