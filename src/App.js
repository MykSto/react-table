import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: ""
    }

  }

  handleClickAge() {
  }

  handleClickName() {
  }

  handleClickPoints() {
  }

  handleClickRank() {
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age clicked={this.handleClickAge}/>
          <Name clicked={this.handleClickName}></Name>
          <Points clicked={this.handleClickPoints}></Points>
          <Rank> clicked={this.handleClickRank}</Rank>
          <Table></Table>
        </div>
      </div>
    );
  }
}

