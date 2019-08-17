import React, { Component } from 'react';

class TimeDetails extends Component {
    constructor(props) {
        super(props);
        this.period = [1, 2, 3, 4, 5, 6, 7]
        this.nop = [1, 2, 3, 4]
        this.state = { start: 1, nop: 2 }
    }

    onPeriodChange = (event) => {
        this.setState({ start: event.target.value })
    }

    onnopChange = (event) => {
        this.setState({ nop: event.target.value })
    }

    renderPeriods = () => {
        return <select name="Period" id="startPeriod" className="m-2 p-2 rounded-lg bg-light" onChange={evt => this.onPeriodChange(evt)}>
            <option value=''>select the starting period</option>

            {this.period.map(period => <option value={period} key={period}>{period}</option>)}
        </select>
    }

    rendernop = () => {
        return <select name="Period" id="startPeriod" className="m-2 p-2 rounded-lg bg-light" onChange={evt => this.onnopChange(evt)}>
            <option value=''>select the no. of period</option>

            {this.nop.map(period => <option value={period} key={period}>{period}</option>)}
        </select>
    }
    render() {
        return (<React.Fragment>
            {this.renderPeriods()}
            {this.rendernop()}
        </React.Fragment>

        );
    }
}

export default TimeDetails;