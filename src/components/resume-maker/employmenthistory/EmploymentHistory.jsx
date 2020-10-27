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
        this.state.employmentBoxes.map((box,index) => {
               boxes.push(<React.Fragment key={index}>{box}</React.Fragment>)    
               return true   
        })

        return (
            
            <div className="employmentHistory">
                <h1>Employment History</h1>
                <p>Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</p>
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
