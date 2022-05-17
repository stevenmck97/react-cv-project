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
                duration: "",
            },
            work: {
                company: "",
                position: "",
                tasks: "",
                duration: "",
            },
        };
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Personal Details</h1>
                    <label htmlFor="genName">
                        Name:
                        <input
                            type="text"
                            value={this.state.general.name}
                            id="genName"
                        />
                    </label>
                    <label htmlFor="genEmail">
                        Email:
                        <input
                            type="email"
                            value={this.state.general.email}
                            id="genEmail"
                        />
                    </label>
                    <label htmlFor="genPhone">
                        Phone Number:
                        <input
                            type="number"
                            value={this.state.general.phoneNo}
                            id="genPhone"
                        />
                    </label>

                    <h1>Education</h1>
                    <label htmlFor="school">
                        School Name:
                        <input
                            type="text"
                            value={this.state.education.school}
                            id="school"
                        />
                    </label>
                    <label htmlFor="course">
                        Course Name:
                        <input
                            type="text"
                            value={this.state.education.course}
                            id="course"
                        />
                    </label>
                    <label htmlFor="duration">
                        Duration:
                        <input
                            type="text"
                            value={this.state.education.duration}
                            id="duration"
                        />
                    </label>
                    <h1>Work Experience</h1>
                    <label htmlFor="company">
                        Company:
                        <input
                            type="text"
                            value={this.state.work.company}
                            id="company"
                        />
                    </label>
                    <label htmlFor="position">
                        Position:
                        <input
                            type="text"
                            value={this.state.work.position}
                            id="position"
                        />
                    </label>
                    <label htmlFor="tasks">
                        Tasks:
                        <input
                            type="text"
                            value={this.state.work.tasks}
                            id="tasks"
                        />
                    </label>
                    <label htmlFor="workDuration">
                        Duration:
                        <input
                            type="text"
                            value={this.state.work.duration}
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
