import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    UPDATE_SCHOOL_COLLEGE,
    UDPATE_DEGREE,
    UPDATE_EDUCATION_START_DATE,
    UPDATE_EDUCATION_END_DATE,
    UPDATE_EDUCATION_CITY,
} from '../../../redux/actionTypes.jsx'
import store from '../../../redux/store'

export class EducationBox extends Component {

    constructor(props) {
        super(props); 
      }
      educationDetailsHandler = (event) =>{
        switch (event.target.name) {
            case 'school_college' : 
            store.dispatch( {type:UPDATE_SCHOOL_COLLEGE, payload:{school_college:event.target.value, number:this.props.number}}) 
            break;

            case 'degree' : 
            store.dispatch( {type:UDPATE_DEGREE, payload:{degree:event.target.value, number:this.props.number}}) 
            break; 
            case 'city' : 
            store.dispatch( {type:UPDATE_EDUCATION_CITY, payload:{city:event.target.value, number:this.props.number}}) 
            break; 
            case 'startDate': 
            store.dispatch( {type:UPDATE_EDUCATION_START_DATE, payload:{startDate:event.target.value, number:this.props.number}}) 
                        break;
            
            case 'endDate' : 
            store.dispatch( {type:UPDATE_EDUCATION_END_DATE, payload:{endDate:event.target.value, number:this.props.number}}) 
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
                    <div className="panel-heading" data-toggle="collapse" href={`#education-collapse-${this.props.number}`}>
                        <div className="panel-inner">
                        <div className="sc-iUpOdG fIJKcW">
                            <div className="sc-kGeDwz sc-hgeeVt jSLZTO">
                                {this.props.school_college?this.props.school_college:"(Not Specified)"}
                            </div>
                            <div className="sc-kGeDwz sc-gwZsXD eApNNm">
                                {this.convertDateToString(Date.parse(this.props.startDate))} - {this.convertDateToString(Date.parse(this.props.endDate))}
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
                <div id={`education-collapse-${this.props.number}`} className="panel-collapse collapse">
                <div className="panel-body">
            <div className="row">
							<div className="col-lg-6">
								<div className="form-group">
									<label>School/College</label>
									<input className="form-control" type="text" value={this.props.school_college} name='school_college' onChange={this.educationDetailsHandler} placeholder="School/College"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Degree</label>
									<input className="form-control" value={this.props.degree} name='degree' onChange={this.educationDetailsHandler} placeholder="Degree"/>
								</div>
							</div>


							<div className="col-lg-6">
								<div className="form-group">
									<label>Start Date <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="date" value={this.convertDateToStringnForInput(Date.parse(this.props.startDate))}  value={this.props.startDate}  onChange={this.educationDetailsHandler} placeholder="Start Date"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>End Date <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="date"   value={this.convertDateToStringnForInput(Date.parse(this.props.endDate))}   onChange={this.educationDetailsHandler} placeholder="End Date"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>City</label>
									<input className="form-control"  value={this.props.city}  onChange={this.educationDetailsHandler} name='city' placeholder="City"/>
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
                <a href={void(0)} onClick={() => { this.props.deleteEducationBox(this.props.number) }}>
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

export default EducationBox
