import React, { Component } from 'react';

export default class Period extends Component {
    getToptions(){
        return(
            <div>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
            </div>
        );
    }
    getTeacher(){
        return (
            <div id = "teacherName">
                <select name="teacher" id="teacherid">
                    <input type="text"/>
                    {this.getToptions()}
                </select>
            </div>
        );
    }


    render() {
        return (
            <div>
                <p>my name is diensh</p>
                {this.getTeacher()}
            </div>
        );
    }
}