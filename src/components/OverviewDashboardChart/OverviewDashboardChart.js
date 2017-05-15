import React, { Component } from 'react';

import Description from './Description';
import BulletChart from './BulletChart';
import Improvement from './Improvement';


class OverviewDashboardChart extends Component {

    render() {

        const titleText = this.props.data.title;
        const subtitleText = this.props.data.subtitle;
        const link = this.props.data.link;

        const ticks = this.props.data.ticks;
        const tickValues = this.props.data.tick_values;
        const range = this.props.data.range;
        const unit = this.props.data.units;

        const markers = [];

        if (this.props.data.group_organizations.length < 1) {
            markers.push({
                'tick': this.props.data.baseline_tick,
                'tickValue': this.props.data.baseline_value,
                'numPatients': this.props.data.baseline_patients
            });

            markers.push({
                'tick': this.props.data.last_quarter_tick,
                'tickValue': this.props.data.last_quarter_value,
                'numPatients': this.props.data.last_quarter_patients
            });
        }

        let timePeriod = this.props.filters().timePeriod;

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

        return (
            <svg width="1100" height="52">
                <g>
                    <Description title={titleText} subtitle={subtitleText} link={link} />
                    <BulletChart data={data} ticks={ticks} tickValues={tickValues} range={range} unit={unit} markers={markers} />
                    <Improvement />
                </g>
            </svg>
        );
    }
}

export default OverviewDashboardChart;
