### Hooks version of App.js
______________________
```
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [peopleState, setPeopleState] = useState({
    people: [
      { name: "Axel", age: 32 },
      { name: "Dexter", age: 33 },
      { name: "Henry", age: 34 }
    ],
    otherState: 'Something here'
  });

  //* Using Hooks, in this case setPeopleState will only replace the old state with the new state and will not merge old state data. So we manually have to enter otherState into setPeopleState whilst we update people's state, or we will lose that data.
  const switchName = () => {
    setPeopleState({
      people: [
        { name: "AAxxeell", age: 16 },
        { name: "DDeexxtteerr", age: 17 },
        { name: "HHeennrryy", age: 18 }
      ],
      otherState: peopleState.otherState //*
    });
  };

  // The more elegant way of doing this is to not manually enter it but to use useState more than once. e.g.

  // useState({otherState: 'Something here'});
  // or
  // useState('Something here'); this can be a string, number etc.
  // const [otherState, setOtherState] = useState('Something here');

  // You can use useState as many times as you'd like.

  return (
    <div className="App">
      <h1>Hi, Axe</h1>
      <button onClick={switchName}>Switch Name</button>
      <Person
        name={peopleState.people[0].name}
        age={peopleState.people[0].age}
        click={switchName}
      />
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age} />
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age} />
    </div>
  );
}

export default App;
```