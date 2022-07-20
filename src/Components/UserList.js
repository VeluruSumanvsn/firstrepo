import React from 'react';

function UserList() {
  const users = ['James', 'Nora', 'Matthew', 'Joe', 'Susan'];
  
  // function deleteUserWithName(name) {
  //   console.log("Clicked")
  // }
  
  return (
    <ul>
      {users.map((name) => (
        <li>
          <h1 key={name.id}>{name}</h1>
        </li>
      ))}
    </ul>
  );
}

export default UserList;