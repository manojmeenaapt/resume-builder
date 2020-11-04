import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import EmploymentHistoryBox from './EmploymentHistoryBox'
import store from '../../../redux/store'
import {
    Add_NEW_EMPLYEEMENT_BOX,
    DELETE_EMPLYEEMENT_BOX
} from '../../../redux/actionTypes.jsx'



export class EmploymentHistory extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            employmentBoxes:[],
            countEmployementBoxes:0
        }
    }

    addEmploymentBox(prevBox){
        this.setState({employmentBoxes: [...this.state.employmentBoxes, this.state.countEmployementBoxes], countEmployementBoxes: this.state.countEmployementBoxes+1})
        store.dispatch( {type:Add_NEW_EMPLYEEMENT_BOX, payload:{number:this.state.countEmployementBoxes}}) 
    }

    deleteEmploymentBox(index){
        console.log(index);
        store.dispatch( {type:DELETE_EMPLYEEMENT_BOX, payload:{number:index}}) 
        var boxes = this.state.employmentBoxes.filter((item, i) => item !== index);
        this.setState({
            employmentBoxes : boxes,
        })
    }
   
    render() {
        return (
            
            <div className="block">
                <h4>Employment History</h4>
                <p>Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</p>
            <div className="boxes">
                {
                    this.state.employmentBoxes.map((item) => {  
                        return <EmploymentHistoryBox  number={item} key={item} deleteEmploymentBox={(index) => this.deleteEmploymentBox(index)} />   
                    })

                }
            </div>
                <a href={void(0)} onClick={() => { this.addEmploymentBox() }}>
                    +  Add Employment
                </a>
            </div>
        )
    }
}

export default EmploymentHistory
