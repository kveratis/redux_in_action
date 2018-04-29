import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../logo.svg';
import './App.css';

import TaskPage from '../Task/TaskPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Parsnip</h1>
        </header>
        <div className="main-content">
          <TaskPage tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
