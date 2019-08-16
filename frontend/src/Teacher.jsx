import React, { Component } from 'react';

export default class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {nTeach : 1};
    }
    renderTeacher = () => {
        // return let card = [];
    }

    handleClick = () => {
        let temp = this.state.nTeach + 1;
        this.setState({nTeach : temp});
    }
    render() {
        console.log(this.state.nTeach)
        var i = 0;
        return (
            <div>
                <input label = "teacher" type="text"/>
                <button onClick = {this.handleClick.bind(this)}>add Teacher</button>
            </div>
        );
    }
}