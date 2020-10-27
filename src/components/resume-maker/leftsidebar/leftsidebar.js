import React, { Component } from 'react'
import { Language } from '../language/Language'
import PersonalDetails from '../personaldetails/PersonalDetails'
import ProfessionalSummary from '../professionalsummary/ProfessionalSummary'
import EmploymentHistory from '../employmenthistory/EmploymentHistory';
import Education from '../education/Education'
import WebsiteLinks from '../website-and-social-link/WebsiteLinks'
import ResumeTitle from '../resumetitle/resumetitle'



class LeftSidebar extends Component {
    render() {
        return (
            <div className="leftsidebar">
                <div className="resume-head"> 
                    <ResumeTitle />
                    <Language />
                    <PersonalDetails />
                    <ProfessionalSummary />
                    <EmploymentHistory />
                    <Education />
                    <WebsiteLinks />
                </div>
            </div>
        )
    }
    
}

export default LeftSidebar
