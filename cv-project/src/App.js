import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Work from "./components/Work";

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

        return (
            <div>
                <form>
                    <General
                        firstName={name}
                        email={email}
                        phoneNo={phoneNo}
                        onChange={this.handleInputChange}
                    />

                    <Education
                        school={school}
                        course={course}
                        edDuration={edDuration}
                        onChange={this.handleInputChange}
                    />

                    <Work
                        company={company}
                        position={position}
                        tasks={tasks}
                        workDuration={workDuration}
                        onChange={this.handleInputChange}
                    />

                    <button type="submit">Create CV</button>
                </form>
                <div>
                    <li>{name}</li>
                    <li>{email}</li>
                </div>
            </div>
        );
    }
}

export default App;
