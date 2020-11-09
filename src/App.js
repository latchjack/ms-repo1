import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: "Axel", age: 32 },
      { name: "Dexter", age: 33 },
      { name: "Henry", age: 34 }
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

  switchNameHandler = () => {
    // console.log('You clicked switch name');
    this.setState({
      people: [
        { name: "Doom", age: 33 },
        { name: "Bonnie", age: 35 },
        { name: "Bill", age: 36 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      people: [
        { name: "Doom", age: 33 },
        { name: event.target.value, age: 35 },
        { name: "Bill", age: 36 }
      ]
    });
  };

  togglePeopleHandler = () => {
    const isShowing = this.state.showPeople;
    this.setState({ showPeople: !isShowing });
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">

        <h1>React App</h1>
        {/*
        Variation of button    
        <button
          style={style}
          onClick={() => switchNameHandler('Latch')}
        >
          Switch Name
        </button>
        */}

        <button
          style={style}
          onClick={this.togglePeopleHandler}
        >
          Toggle People
        </button>

        {/* Shows people if not set to Null from toggle */}
        {people}

      </div>
    );
  }
};

export default App;
