import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    




export class EducationBox extends Component {

    constructor(props) {
        super(props);
            this.state = {
                startDate:new Date(),
                endDate:new Date()
            }
   
      }


 

    render() {
        return (
            <div className="row">
							<div className="col-lg-6">
								<div className="form-group">
									<label>School/College</label>
									<input className="form-control" type="text" name='school_college' placeholder="School/College"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Degree</label>
									<input className="form-control" name='degree' placeholder="Degree"/>
								</div>
							</div>


							<div className="col-lg-6">
								<div className="form-group">
									<label>Start Date <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="date" selected={this.state.startDate} onChange={date => this.setState({
                                                startDate:date
                                    })} placeholder="Start Date"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>End Date <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="date" selected={this.state.endDate} onChange={date => this.setState({
                                                endDate:date
                                    })} placeholder="End Date"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>City</label>
									<input className="form-control" name='city' placeholder="City"/>
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
        )
    }
}

export default EducationBox
