import React, { Component } from 'react';

import Description from './Description';
import BulletChart from './BulletChart';
import Improvement from './Improvement';


class OverviewDashboardChart extends Component {

    constructor(props) {
        super(props);

        this.getTimePeriodData = this.getTimePeriodData.bind(this);
        this.calculateImprovement = this.calculateImprovement.bind(this);
        this.createMarkers = this.createMarkers.bind(this);
    }

    getTimePeriodData() {

        const timePeriod = this.props.filters().timePeriod;

        let data = {};

        switch (timePeriod) {
            case 2:
                data = {
                    mainTick: this.props.data.last_quarter_tick,
                    mainValue: this.props.data.last_quarter_value,
                    mainNumPatients: this.props.data.last_quarter_patients,

                    secondaryTick: this.props.data.hospital_system.last_quarter.tick,
                    secondaryValue: this.props.data.hospital_system.last_quarter.val,
                    secondaryNumPatients: this.props.data.hospital_system.last_quarter.patients
                };

                break;
            case 3:
                data = {
                    mainTick: this.props.data.last_12_months_tick,
                    mainValue: this.props.data.last_12_months_value,
                    mainNumPatients: this.props.data.last_12_months_patients,

                    secondaryTick: this.props.data.hospital_system.last_12_months.tick,
                    secondaryValue: this.props.data.hospital_system.last_12_months.val,
                    secondaryNumPatients: this.props.data.hospital_system.last_12_months.patients
                };

                break;
            case 0:
                data = {
                    mainTick: this.props.data.year_to_date_tick,
                    mainValue: this.props.data.year_to_date_value,
                    mainNumPatients: this.props.data.year_to_date_patients,

                    secondaryTick: this.props.data.hospital_system.year_to_date.tick,
                    secondaryValue: this.props.data.hospital_system.year_to_date.val,
                    secondaryNumPatients: this.props.data.hospital_system.year_to_date.patients
                };

                break;
            case 1:
            default:
                data = {
                    mainTick: this.props.data.last_month_tick,
                    mainValue: this.props.data.last_month_value,
                    mainNumPatients: this.props.data.last_month_patients,

                    secondaryTick: this.props.data.hospital_system.last_month.tick,
                    secondaryValue: this.props.data.hospital_system.last_month.val,
                    secondaryNumPatients: this.props.data.hospital_system.last_month.patients
                };
        }

        return data;
    }

    calculateImprovement(numTimePeriodPatients, numBaselinePatients, timePeriodValue, baselineValue) {
        const reverse = this.props.data.reverse;

        if(numTimePeriodPatients < 1 || numBaselinePatients < 1)
            return false;

        return reverse ? baselineValue - timePeriodValue : timePeriodValue - baselineValue;
    }

    createMarkers() {
        const groupOrganizations = this.props.data.group_organizations;
        const timePeriod = this.props.filters().timePeriod;
        const colors = ['#596a7a', '#91afd5', '#d4cbf7', '#1167a3', '#edecb6', '#7bb7d6', '#ff7874', '#202a34', '#648572', '#f0c368'];

        let markers = [];

        if (Object.keys(groupOrganizations).length === 0) {
            markers.push({
                'tick': this.props.data.baseline_tick,
                'tickValue': this.props.data.baseline_value,
                'numPatients': this.props.data.baseline_patients
            });
        } else {
            markers = Object.keys(groupOrganizations).map(function (key, i) {
                let data = {};

                switch (timePeriod) {
                    case 2:
                        data = {
                            tick: groupOrganizations[key].last_quarter.tick,
                            tickValue: groupOrganizations[key].last_quarter.val,
                            numPatients: groupOrganizations[key].last_quarter.patients,
                            color: colors[i],
                            letter: i
                        };

                        break;
                    case 3:
                        data = {
                            tick: groupOrganizations[key].last_12_months.tick,
                            tickValue: groupOrganizations[key].last_12_months.val,
                            numPatients: groupOrganizations[key].last_12_months.patients,
                            color: colors[i],
                            letter: i
                        };

                        break;
                    case 0:
                        data = {
                            tick: groupOrganizations[key].year_to_date.tick,
                            tickValue: groupOrganizations[key].year_to_date.val,
                            numPatients: groupOrganizations[key].year_to_date.patients,
                            color: colors[i],
                            letter: i
                        };

                        break;
                    case 1:
                    default:
                        data = {
                            tick: groupOrganizations[key].last_month.tick,
                            tickValue: groupOrganizations[key].last_month.val,
                            numPatients: groupOrganizations[key].last_month.patients,
                            color: colors[i],
                            letter: i
                        };
                }

                return data;
            });
        }

        return markers;
    }

    render() {

        const titleText = this.props.data.title;
        const subtitleText = this.props.data.subtitle;
        const link = this.props.data.link;

        const ticks = this.props.data.ticks;
        const tickValues = this.props.data.tick_values;
        const range = this.props.data.range;
        const unit = this.props.data.units;
        const decimalPlaces = this.props.data.decimal_places;

        const data = this.getTimePeriodData();

        const improvementValue = this.calculateImprovement(data.mainNumPatients, this.props.data.baseline_patients, data.mainValue, this.props.data.baseline_value);

        const markers = this.createMarkers();

        return (
            <svg width="1100" height="52">
                <g>
                    <Description title={titleText} subtitle={subtitleText} link={link} />
                    <BulletChart data={data} ticks={ticks} tickValues={tickValues} range={range} unit={unit} markers={markers} decimalPlaces={decimalPlaces} />
                    <Improvement value={improvementValue} unit={unit} decimalPlaces={decimalPlaces} />
                </g>
            </svg>
        );
    }
}

export default OverviewDashboardChart;
