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
            
            <div className="block">
                <h4>Education</h4>
                <p>If relevant, include your most recent educational achievements and the dates here</p>
            <div className="boxes">
                {boxes}
            </div>
                <a href={void(0)} onClick={() => { this.addEmploymentBox(this.state.Educations) }}>
                    +  Add Education
                </a>
            </div>
        )
    }
}

export default Education
