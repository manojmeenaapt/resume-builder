import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export class EmploymentHistoryBox extends Component {
    render() {
        return (
            <div className="employmentBox">
                <FormControl className="employmentDetail">
                    <TextField label="Job Title" />
                </FormControl>

                <FormControl className="employmentDetail">
                    <TextField  label="Employer" />
                </FormControl>

                <FormControl className="employmentDetail">
                    <TextField  label="Start Date" />
                    <TextField  label="End Date" />
                </FormControl>
            </div>
        )
    }
}

export default EmploymentHistoryBox
