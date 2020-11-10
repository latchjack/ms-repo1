import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium'
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

  // variation of switchNameHandler function
  // switchNameHandler = (newName) => {
  //   // console.log('You clicked switch name');
  //   this.setState({
  //     people: [
  //       { name: newName, age: 33 },
  //       { name: "Bonnie", age: 35 },
  //       { name: "Bill", age: 36 }
  //     ]
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice(); this line or line below
    // the spread operator is the modern approach to this.
    // this allows us to update state without mutating.
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    // const person = this.state.people[personIndex]; - would cause mutation
    // const person = Object.assign({}, this.state.people[personIndex]); - another method
    // below is the modern approach
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let people = null;

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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red');
    }
    if (this.state.people.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>This is working!</p>
          <button
            style={style}
            onClick={this.togglePeopleHandler}
          >
            Toggle People
        </button>
          {people}
        </div>
      </StyleRoot>
    );
  }
};

export default Radium(App);
