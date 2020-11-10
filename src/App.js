import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: '123', name: "Axel", age: 32 },
      { id: '456', name: "Dexter", age: 33 },
      { id: '789', name: "Henry", age: 34 }
    ],
    showPeople: false
  };

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];

    people[personIndex] = person;

    this.setState({ people: people });
  };

  togglePeopleHandler = () => {
    const isShowing = this.state.showPeople;
    this.setState({ showPeople: !isShowing });
  }


  render() {
    let people = null;
    let btnClass = [classes.Button];

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    btnClass.push(classes.Red);

    const assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>React App</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        <button className={btnClass.join(' ')} onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {people}
      </div>
    );
  }
};

export default App;
