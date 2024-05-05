import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollegeName) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName.current.value, age: uAge.current.value, collegeName: uCollegeName.current.value },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
