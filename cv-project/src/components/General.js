import React from "react";

const General = ({ fullName, email, phoneNo, onChange }) => {
    // const { fullName, email, phoneNo, onChange } = props;

    return (
        <div>
            <h1>Personal Details</h1>
            <label htmlFor="genName">
                Name:
                <input
                    name="name"
                    type="text"
                    value={fullName}
                    id="genName"
                    onChange={onChange}
                />
            </label>
            <label htmlFor="genEmail">
                Email:
                <input
                    name="email"
                    type="email"
                    value={email}
                    id="genEmail"
                    onChange={onChange}
                />
            </label>
            <label htmlFor="genPhone">
                Phone Number:
                <input
                    name="phoneNo"
                    type="number"
                    value={phoneNo}
                    id="genPhone"
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default General;
