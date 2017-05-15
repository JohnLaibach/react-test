import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OverviewDashboardChart from './components/OverviewDashboardChart';
import Button from './components/Button';
import Multiselect from 'react-bootstrap-multiselect';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                "status":0,
                "hard_coded":true,
                "title":"Quality Composite Score",
                "subtitle":"CMS - Medicare Patients Only",
                "risk_adjusted":false,
                "link":"/patient/cms-quality-measure-scores/?drg=470",
                "reverse":false,
                "show_box_improvement":true,
                "range":[
                  0,
                  100
                ],
                "ticks":[
                  10.0,
                  25.0,
                  50.0,
                  75.0,
                  90.0
                ],
                "tick_values":[
                  2.0,
                  5.0,
                  10.0,
                  15.0,
                  18.0
                ],
                "units":"",
                "decimal_places":null,
                "baseline_tick":47.0,
                "last_12_months_tick":50.0,
                "last_quarter_tick":89.0,
                "last_month_tick":60.0,
                "year_to_date_tick":22.0,
                "surgeon_tick":-1.0,
                "compare_tick":-1.0,
                "baseline_value":9.4,
                "last_12_months_value":10.0,
                "last_quarter_value":17.8,
                "last_month_value":12.0,
                "year_to_date_value":4.4,
                "surgeon_value":-1.0,
                "compare_value":-1.0,
                "baseline_patients":45.0,
                "last_12_months_patients":123.0,
                "last_quarter_patients":65.0,
                "last_month_patients":32.0,
                "year_to_date_patients":45.0,
                "surgeon_patients":-1.0,
                "trend":[
                ],
                "compare_patients":-1.0,
                "percentiles":{
                },
                "hospital_system":{
                  "year_to_date":{
                      "val":4.0920000000000005,
                      "patients":45,
                      "tick":20.46
                  },
                  "last_12_months":{
                      "val":9.3,
                      "patients":123,
                      "tick":46.5
                  },
                  "last_quarter":{
                      "val":16.554000000000002,
                      "patients":65,
                      "tick":82.77000000000001
                  },
                  "last_month":{
                      "val":11.16,
                      "patients":32,
                      "tick":55.800000000000004
                  }
                },
                "group_organizations":[
                ]
                },
            timePeriods: [
                {
                    value: 1,
                    label: 'Most Recent Month'
                },
                {
                    value: 2,
                    label: 'Most Recent 3 Months'
                },
                {
                    value: 3,
                    label: 'Most Recent 12 Months'
                },
                {
                    value: 0,
                    label: '2017 Year to Date'
                }
            ],
            selectedTimePeriod: 1
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);

        this.handleChangeTimePeriod = this.handleChangeTimePeriod.bind(this);
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

    handleChangeTimePeriod() {
        let selected = [...this.refs.timePeriods.selectRef]
            .filter(option => option.selected)
            .map(option => option.value);

        this.setState({
            selectedTimePeriod: parseInt(selected[0], 10)
        });
    }

    handleChangeFilter() {
        return {
            timePeriod: this.state.selectedTimePeriod
        }
    }

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                <OverviewDashboardChart data={this.state.data} filters={this.handleChangeFilter} />

                <p>
                    <Button onClick={this.handleClick} />
                </p>

                <Multiselect data={this.state.timePeriods} onChange={this.handleChangeTimePeriod} ref="timePeriods" />

            </div>
        );
    }
}

export default App;
