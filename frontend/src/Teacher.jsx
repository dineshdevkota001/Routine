import React, { Component } from 'react';

export default class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {nTeach : 1
        teachers : []};
    }
    renderTeacher = (id) => {
        // return <input label = "teacher" type="text"/>let card = [];
    }

    handleClick = () => {
        let temp = this.state.nTeach + 1;
        this.setState({nTeach : temp});
    }
    render() {
        console.log(this.nTeach)
        var i = 0;
        return (
            <div>
                {this.renderTeacher(2)}
                <button onClick = {this.handleClick.bind(this)}>add Teacher</button>
            </div>
        );
    }
}