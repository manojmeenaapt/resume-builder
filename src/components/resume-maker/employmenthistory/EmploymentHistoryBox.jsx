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
            case 'startDate': 
            store.dispatch( {type:UPDATE_START_DATE, payload:{startDate:event.target.value, number:this.state.mynumber}}) 
                        break;
            
            case 'endDate' : 
            store.dispatch( {type:UPDATE_END_DATE, payload:{endDate:event.target.value, number:this.state.mynumber}}) 
                        break;
            default:
                    break;
        }
    }

    convertDateToString = (date) => {
        date = new Date(date);
        return date.toLocaleString("en-GB", {
            month: "short",
            year: "numeric",
        });      
     }
     convertDateToStringnForInput = (date) => {
         date = new Date(date);
        return date.toISOString().slice(0,10);;
     }
        
    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" href={`#collapse-${this.state.mynumber}`}>
                        <div className="panel-inner">
                        <div className="sc-iUpOdG fIJKcW">
                            <div className="sc-kGeDwz sc-hgeeVt jSLZTO">
                                {this.state.jobtitle?this.state.jobtitle:"(Not Specified)"}
                            </div>
                            <div className="sc-kGeDwz sc-gwZsXD eApNNm">
                                {this.convertDateToString(Date.parse(this.state.startDate))} - {this.convertDateToString(Date.parse(this.state.endDate))}
                            </div>
                        </div>
                        <div className="sc-cKZAiZ sc-klSiHT LYHIX">
                            <div className="sc-iUVpnZ jKxQkF">
                                Expand
                            </div>
                            <div className="sc-bWFPNQ eqtGtW">
                                <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z">
                                    </path>
                                </svg>
                            </div>
                        </div>                        
                        </div>
                    </div>
                <div id={`collapse-${this.state.mynumber}`} className="panel-collapse collapse">
                <div className="panel-body">
                <div className="row">
							<div className="col-lg-6">
								<div className="form-group">
									<label>Job Title</label>
									<input className="form-control" type="text"  value={this.state.jobtitle} name='jobtitle' onChange={this.employmentDetailsHandler} placeholder="Job Title"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Employer</label>
									<input className="form-control" value={this.state.employer} name='employer' onChange={this.employmentDetailsHandler} placeholder="Employer"/>
								</div>
							</div>


							<div className="col-lg-6">
								<div className="form-group">
									<label>Start Date <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="date" value={this.convertDateToStringnForInput(Date.parse(this.state.startDate))} name="startDate"  onChange={this.employmentDetailsHandler} placeholder="Start Date"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>End Date <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="date" value={this.convertDateToStringnForInput(Date.parse(this.state.endDate))} name="endDate"  onChange={this.employmentDetailsHandler} placeholder="End Date"/>
								</div>
							</div>

               
                <div className="col-lg-12">
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
                </div>
                <div className="col-lg-12">
                <a href={void(0)} onClick={() => { this.props.deleteEmploymentBox(this.state.mynumber) }}>
                    -  Delete
                </a>
                </div>
            </div>


                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default EmploymentHistoryBox
