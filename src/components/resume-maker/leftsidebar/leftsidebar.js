import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Language } from '../language/Language'
import PersonalDetails from '../personaldetails/PersonalDetails'
import ProfessionalSummary from '../professionalsummary/ProfessionalSummary'
import EmploymentHistory from '../employmenthistory/EmploymentHistory';


export class LeftSidebar extends Component {

    render() {
        return (
            <div className="leftsidebar">
                <div className="resume-head"> 
                    <TextField label="Resume Title" autoFocus={true} fullWidth = {true}/>
                    <Language />
                    <PersonalDetails />
                    <ProfessionalSummary />
                    <EmploymentHistory />
                </div>
            </div>
        )
    }
}

export default LeftSidebar
