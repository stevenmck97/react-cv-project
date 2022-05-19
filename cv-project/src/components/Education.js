import React from "react";

const Education = (props) => {
    const { school, course, edDuration, onChange } = props;

    return (
        <div>
            <h1>Education</h1>
            <label htmlFor="school">
                School Name:
                <input
                    name="school"
                    type="text"
                    value={school}
                    id="school"
                    onChange={onChange}
                />
            </label>
            <label htmlFor="course">
                Course Name:
                <input
                    name="course"
                    type="text"
                    value={course}
                    id="course"
                    onChange={onChange}
                />
            </label>
            <label htmlFor="edDuration">
                Duration:
                <input
                    name="edDuration"
                    type="text"
                    value={edDuration}
                    id="edDuration"
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default Education;
