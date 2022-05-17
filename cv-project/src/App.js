import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            general: {
                name: "",
                email: "",
                phoneNo: "",
            },
            education: {
                school: "",
                course: "",
                edDuration: "",
            },
            work: {
                company: "",
                position: "",
                tasks: "",
                workDuration: "",
            },
        };
    }

    render() {
        const { name, email, phoneNo } = this.state.general;
        const { school, course, edDuration } = this.state.education;
        const { company, position, tasks, workDuration } = this.state.work;

        return (
            <div>
                <form>
                    <h1>Personal Details</h1>
                    <label htmlFor="genName">
                        Name:
                        <input type="text" value={name} id="genName" />
                    </label>
                    <label htmlFor="genEmail">
                        Email:
                        <input type="email" value={email} id="genEmail" />
                    </label>
                    <label htmlFor="genPhone">
                        Phone Number:
                        <input type="number" value={phoneNo} id="genPhone" />
                    </label>

                    <h1>Education</h1>
                    <label htmlFor="school">
                        School Name:
                        <input type="text" value={school} id="school" />
                    </label>
                    <label htmlFor="course">
                        Course Name:
                        <input type="text" value={course} id="course" />
                    </label>
                    <label htmlFor="edDuration">
                        Duration:
                        <input type="text" value={edDuration} id="edDuration" />
                    </label>
                    <h1>Work Experience</h1>
                    <label htmlFor="company">
                        Company:
                        <input type="text" value={company} id="company" />
                    </label>
                    <label htmlFor="position">
                        Position:
                        <input type="text" value={position} id="position" />
                    </label>
                    <label htmlFor="tasks">
                        Tasks:
                        <input type="text" value={tasks} id="tasks" />
                    </label>
                    <label htmlFor="workDuration">
                        Duration:
                        <input
                            type="text"
                            value={workDuration}
                            id="workDuration"
                        />
                    </label>
                    <button type="submit">Create CV</button>
                </form>
            </div>
        );
    }
}

export default App;
