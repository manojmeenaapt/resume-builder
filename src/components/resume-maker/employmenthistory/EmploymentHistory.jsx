import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import EmploymentHistoryBox from './EmploymentHistoryBox'


export class EmploymentHistory extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            employmentBoxes:[]
        }
    }

    addEmploymentBox(prevBox){
        prevBox.push(<EmploymentHistoryBox />)
        this.setState({
            employmentBoxes : prevBox
        })
    }

    
   
    render() {
        const boxes = [];
        {this.state.employmentBoxes.map((box,index) => {
               boxes.push(<React.Fragment key={index}>{box}</React.Fragment>)       
        })}
        return (
            
            <div className="employmentHistory">
            <div className="boxes">
                {boxes}
            </div>
                <Button color="primary" onClick={() => { this.addEmploymentBox(this.state.employmentBoxes) }}>
                    +  Add Employment
                </Button>
            </div>
        )
    }
}

export default EmploymentHistory
