import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import store from '../../../redux/store'
import {
    UPDATE_EMPLOYEE_HISTORY_JOB_TITLE,
    UDPATE_EMPLOYER,
    UPDATE_START_DATE,
    UPDATE_END_DATE,
} from '../../../redux/actionTypes.jsx'
import Button from '@material-ui/core/Button';





export class EmploymentHistoryBox extends Component {

    constructor(props) {
        super(props);
            this.state = {
                mynumber:this.props.number,
                jobtitle:'',
                employer:'',
                startDate:new Date(),
                endDate:new Date()
            }
            console.log(this.props.number);
      }
      employmentDetailsHandler = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
        switch (event.target.name) {
            case 'jobtitle' : 
            store.dispatch( {type:UPDATE_EMPLOYEE_HISTORY_JOB_TITLE, payload:{jobtitle:event.target.value, number:this.state.mynumber}}) 
            break;

            case 'employer' : 
            store.dispatch( {type:UDPATE_EMPLOYER, payload:{employer:event.target.value, number:this.state.mynumber}}) 
            break; 
            default:
                    break;
        }
    }
    employmentDatesHandler = (key, value) =>{
        this.setState({
            [key]:value
        })
        switch (key) {            
            case 'startDate': 
            store.dispatch( {type:UPDATE_START_DATE, payload:{startDate:value, number:this.state.mynumber}}) 
                        break;
            
            case 'endDate' : 
            store.dispatch( {type:UPDATE_END_DATE, payload:{endDate:value, number:this.state.mynumber}}) 
                        break;
            default:
                    break;
        }
    }

 

    render() {
        return (
            <div className="employmentBox">
                <FormControl className="employmentDetail">
                    <TextField value={this.state.jobtitle} label="Job Title" name='jobtitle' onChange={this.employmentDetailsHandler} />
                </FormControl>

                <FormControl className="employmentDetail">
                    <TextField  value={this.state.employer} label="Employer" name='employer' onChange={this.employmentDetailsHandler} />
                </FormControl>

                <FormControl>
               
                <DatePicker selected={this.state.startDate} name="startDate"  onChange={date => this.employmentDatesHandler("startDate", date)} />

                <DatePicker selected={this.state.endDate} name="endDate"  onChange={date => this.employmentDatesHandler("endDate", date)} />

                <CKEditor
                    editor={ ClassicEditor }
                    config={
                      {
                        height : "300px",
                        // toolbar: [ 'bold', 'italic', 'link', 'bulletedList', 'numberedList' ,'imageInsert']
                      }
                    }
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                       // this.descriptionHandler(editor.getData());
                        const data = editor.getData();
                       // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
              
                </FormControl>
                <Button color="primary" onClick={() => { this.props.deleteEmploymentBox(this.state.mynumber) }}>
                    -  Delete
                </Button>
            </div>
        )
    }
}

export default EmploymentHistoryBox
