import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OverviewDashboardChart from './components/OverviewDashboardChart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

          <OverviewDashboardChart title="Quality Composite Score" subtitle="CMS - Medicare Patients Only" mainValue="500" secondaryValue="300" />
          <OverviewDashboardChart title="Complications" subtitle="% of Patients" mainValue="50" secondaryValue="200" />

      </div>
    );
  }
}

export default App;
