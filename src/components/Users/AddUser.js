import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [error, setError] = useState();

  const enteredName = useRef()
  const enteredUserAge = useRef()
  const enteredCollegeName = useRef()

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredName.current.value)
    if (enteredName.current.value.trim().length === 0 || enteredUserAge.current.value.trim().length === 0 || 
    enteredCollegeName.current.value.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
    enteredName.current.value = ""
    enteredUserAge.current.value = ""
    enteredCollegeName.current.value = ""
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={enteredName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={enteredUserAge}
          />
          <label htmlFor="collegename">College Name (Years)</label>
          <input
            id="collegename"
            type="text"
            ref={enteredCollegeName}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
