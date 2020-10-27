import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import EducationBox from './EducationBox'


export class Education extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            Educations:[]
        }
    }

    addEmploymentBox(prevEducation){
        prevEducation.push(<EducationBox />)
        this.setState({
            Educations : prevEducation
        })
    }

    
   
    render() {
        const boxes = [];
        this.state.Educations.map((education,index) => {
               boxes.push(<React.Fragment key={index}>{education}</React.Fragment>)      
               return true 
        })
        return (
            
            <div className="education">
                <h1>Education</h1>
                <p>If relevant, include your most recent educational achievements and the dates here</p>
            <div className="boxes">
                {boxes}
            </div>
                <Button color="primary" onClick={() => { this.addEmploymentBox(this.state.Educations) }}>
                    +  Add Education
                </Button>
            </div>
        )
    }
}

export default Education
