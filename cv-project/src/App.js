import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            phoneNo: "",

            school: "",
            course: "",
            edDuration: "",

            company: "",
            position: "",
            tasks: "",
            workDuration: "",
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const {
            name,
            email,
            phoneNo,
            school,
            course,
            edDuration,
            company,
            position,
            tasks,
            workDuration,
        } = this.state;
        // const { school, course, edDuration } = this.state.education;
        // const { company, position, tasks, workDuration } = this.state.work;

        return (
            <div>
                <form>
                    <h1>Personal Details</h1>
                    <label htmlFor="genName">
                        Name:
                        <input
                            name="name"
                            type="text"
                            value={name}
                            id="genName"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label htmlFor="genEmail">
                        Email:
                        <input
                            name="email"
                            type="email"
                            value={email}
                            id="genEmail"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label htmlFor="genPhone">
                        Phone Number:
                        <input
                            name="phoneNo"
                            type="number"
                            value={phoneNo}
                            id="genPhone"
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <h1>Education</h1>
                    <label htmlFor="school">
                        School Name:
                        <input
                            name="school"
                            type="text"
                            value={school}
                            id="school"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label htmlFor="course">
                        Course Name:
                        <input
                            name="course"
                            type="text"
                            value={course}
                            id="course"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label htmlFor="edDuration">
                        Duration:
                        <input
                            name="edDuration"
                            type="text"
                            value={edDuration}
                            id="edDuration"
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <h1>Work Experience</h1>
                    <label htmlFor="company">
                        Company:
                        <input
                            name="company"
                            type="text"
                            value={company}
                            id="company"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label htmlFor="position">
                        Position:
                        <input
                            name="position"
                            type="text"
                            value={position}
                            id="position"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label htmlFor="tasks">
                        Tasks:
                        <input
                            name="tasks"
                            type="text"
                            value={tasks}
                            id="tasks"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label htmlFor="workDuration">
                        Duration:
                        <input
                            name="workDuration"
                            type="text"
                            value={workDuration}
                            id="workDuration"
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <button type="submit">Create CV</button>
                </form>
            </div>
        );
    }
}

export default App;
