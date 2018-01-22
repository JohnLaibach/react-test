import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data3.json';

//import OverviewDashboardChart from './components/OverviewDashboardChart';
import Button from './components/Button';
import Multiselect from 'react-bootstrap-multiselect';
import Filter from './components/Filter';


class App extends Component {
    constructor(props) {
        super(props);

        const charts = data[2].bullet_charts;

        this.state = {
            data: charts,
            timePeriods: {
                1: {
                    value: 1,
                    label: 'Most Recent Month',
                    selected: true
                },
                2: {
                    value: 2,
                    label: 'Most Recent 3 Months',
                    selected: false
                },
                3: {
                    value: 3,
                    label: 'Most Recent 12 Months',
                    selected: false
                },
                0: {
                    value: 0,
                    label: '2017 Year to Date',
                    selected: false
                }
            }
        };

        //this.createCharts = this.createCharts.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    handleClick() {
        this.setState({
            data: {
                "status": 0,
                "hard_coded": false,
                "title": "— Personnel",
                "subtitle": "$ / Patient",
                "risk_adjusted": false,
                "link": "/metric-details/personnel/?drg=470",
                "reverse": true,
                "show_box_improvement": true,
                "range": [
                  0,
                  100
                ],
                "ticks": [
                  10,
                  25,
                  50,
                  75,
                  90
                ],
                "tick_values": [
                  4440.9087755850815,
                  4284.7199786001775,
                  3624.1854210297543,
                  3372.6833332556557,
                  2525.5314515090263
                ],
                "units": "$",
                "decimal_places": 0,
                "baseline_tick": 51.86830499897616,
                "last_12_months_tick": 56.747122572199004,
                "last_quarter_tick": 80.89695764589857,
                "last_month_tick": 86.93229997499914,
                "year_to_date_tick": 80.89695764589857,
                "surgeon_tick": -1.0,
                "compare_tick": -1.0,
                "baseline_value": 3568.51430092,
                "last_12_months_value": 3492.92708498,
                "last_quarter_value": 3220.83216801,
                "last_month_value": 2843.08480242,
                "year_to_date_value": 3220.83216801,
                "surgeon_value": -1.0,
                "compare_value": -1.0,
                "baseline_patients": 982.0,
                "last_12_months_patients": 1212.0,
                "last_quarter_patients": 372.0,
                "last_month_patients": 124.0,
                "year_to_date_patients": 372.0,
                "surgeon_patients": -1.0,
                "compare_patients": -1.0,
                "percentiles": {
                  "90": {
                      "tick": 90,
                      "value": 2525.5314515090263
                  },
                  "75": {
                      "tick": 75,
                      "value": 3372.6833332556557
                  },
                  "10": {
                      "tick": 10,
                      "value": 4440.9087755850815
                  },
                  "50": {
                      "tick": 50,
                      "value": 3624.1854210297543
                  },
                  "25": {
                      "tick": 25,
                      "value": 4284.7199786001775
                  }
                },
                "hospital_system": {
                  "last_quarter": {
                      "tick": 53.6720244473678,
                      "val": 3622.12325231,
                      "patients": 2812
                  },
                  "last_12_months": {
                      "tick": 50.593159751736984,
                      "val": 3716.66843111,
                      "patients": 10931
                  },
                  "last_month": {
                      "tick": 65.08820360996981,
                      "val": 3533.53894972,
                      "patients": 905
                  },
                  "year_to_date": {
                      "tick": 83.4708357677857,
                      "val": 3220.83216801,
                      "patients": 372
                  }
                },
                "group_organizations": []
                },
        });
    }

    handleChangeTimePeriod = (param) => (e) => {
        this.state.timePeriods[param].selected = !this.state.timePeriods[param].selected;
    }

    handleChangeFilter() {
        return {
            timePeriod: this.state.selectedTimePeriod
        }
    }

    /*createCharts() {
        const handleChangeFilter = this.handleChangeFilter;

        return this.state.data.map(function (obj, i) {
            return (
                <OverviewDashboardChart key={i} data={obj} filters={handleChangeFilter} />
            );
        });
    }*/

    render() {

        //const charts = this.createCharts();

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                

                <p>
                    <Button onClick={this.handleClick} />
                </p>
                
                <Filter title="Time Period" data={this.state.timePeriods} type="single" handleChange={this.handleChangeTimePeriod} name="time-period" />
            </div>
        );
    }
}

export default App;
