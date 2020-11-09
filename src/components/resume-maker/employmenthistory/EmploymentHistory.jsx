import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import EmploymentHistoryBox from './EmploymentHistoryBox'
import store from '../../../redux/store'
import {
    Add_NEW_EMPLYEEMENT_BOX,
    DELETE_EMPLYEEMENT_BOX,
    UPDATE_EMPLOYMENT_HISTORY_TITLE
} from '../../../redux/actionTypes.jsx'
import { connect } from 'react-redux'
import EdiText from "react-editext";



export class EmploymentHistory extends Component {

    constructor(props){
        super(props)
    }

    addEmploymentBox(){
        var next_key = 0;
        var employeehistory_array = this.props.employeehistory.employeehistory;
        if(employeehistory_array.length !== 0){
            var get_last_element = employeehistory_array[employeehistory_array.length - 1];
            var get_last_key = get_last_element.key;
            next_key = get_last_key+1;    
        }
        store.dispatch( {type:Add_NEW_EMPLYEEMENT_BOX, payload:{number:next_key}}) 
    }

    deleteEmploymentBox(index){
        store.dispatch( {type:DELETE_EMPLYEEMENT_BOX, payload:{number:index}}) 
    }
    employementHistoryTitleHandler = (data) =>{
        store.dispatch( {type:UPDATE_EMPLOYMENT_HISTORY_TITLE, payload:{title:data}}) 
    }

    render() {
        var title = this.props.employeehistory.title;
        return (
            <div className="block">
                <h4><EdiText
						value={title?title:'Employment History'}
						type="text"
						onSave={this.employementHistoryTitleHandler}
						submitOnEnter={true}
						cancelOnEscape={true}
						submitOnUnfocus={true}
						startEditingOnFocus={true}
						editButtonClassName="editbtn"
						saveButtonClassName="savebtn"
						cancelButtonClassName="cancelbtn"
						editContainerClassName="form-control-container"
					/></h4>
                <p>Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</p>
            <div className="boxes">
                {
                    this.props.employeehistory.employeehistory.map((item) => {  
                        return <EmploymentHistoryBox  number={item.key} jobtitle={item.jobtitle} employer={item.employer} startDate={item.startDate} endDate={item.endDate} key={item.key} deleteEmploymentBox={(index) => this.deleteEmploymentBox(index)} />   
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
const mapStateToProps = (state, ownProps) => {
    return {
        employeehistory: state.employeehistory
      }
    }


    const EmploymentHistoryComp = connect(mapStateToProps)(EmploymentHistory)
export default EmploymentHistoryComp
