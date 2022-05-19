import React from "react";

const Work = (props) => {
    const { company, position, tasks, workDuration, onChange } = props;

    return (
        <div>
            <h1>Work Experience</h1>
            <label htmlFor="company">
                Company:
                <input
                    name="company"
                    type="text"
                    value={company}
                    id="company"
                    onChange={onChange}
                />
            </label>
            <label htmlFor="position">
                Position:
                <input
                    name="position"
                    type="text"
                    value={position}
                    id="position"
                    onChange={onChange}
                />
            </label>
            <label htmlFor="tasks">
                Tasks:
                <input
                    name="tasks"
                    type="text"
                    value={tasks}
                    id="tasks"
                    onChange={onChange}
                />
            </label>
            <label htmlFor="workDuration">
                Duration:
                <input
                    name="workDuration"
                    type="text"
                    value={workDuration}
                    id="workDuration"
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default Work;
