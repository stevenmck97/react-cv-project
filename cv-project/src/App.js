import React, { useEffect, useState } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Work from "./components/Work";

const App = () => {
    const [cv, setCV] = useState({
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
    });

    const handleInputChange = (e) => {
        setCV({ ...cv, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form>
                <General
                    firstName={cv.name}
                    email={cv.email}
                    phoneNo={cv.phoneNo}
                    onChange={handleInputChange}
                />

                <Education
                    school={cv.school}
                    course={cv.course}
                    edDuration={cv.edDuration}
                    onChange={handleInputChange}
                />

                <Work
                    company={cv.company}
                    position={cv.position}
                    tasks={cv.tasks}
                    workDuration={cv.workDuration}
                    onChange={handleInputChange}
                />

                <button type="submit">Create CV</button>
            </form>
            <div>
                <li>{cv.name}</li>
                <li>{cv.email}</li>
            </div>
        </div>
    );
};

export default App;
