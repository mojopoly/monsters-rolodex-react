import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  // if we don't use arrow function, then we need to bind it on top
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state; // this is simplified of above two line and called destructuring  version of above 2 lines
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
