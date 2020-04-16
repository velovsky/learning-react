import React, { useState } from 'react';
import './App.css';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

interface Person {
  username: string;
}

function App(): JSX.Element {
  // state persons
  const personsValue: Person[] = [{ username: 'Tigas' }, { username: 'Bábá' }];
  const [persons, setPersons] = useState(personsValue);

  const changeUsernameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPersons([{ username: event.target.value }, { username: 'Bárbara' }]);
  };

  return (
    <div className="App">
      <input></input>
      <UserInput change={changeUsernameHandler}></UserInput>
      <UserOutput username={persons[0].username} />
      <UserOutput username={persons[1].username} />
    </div>
  );
}

export default App;
