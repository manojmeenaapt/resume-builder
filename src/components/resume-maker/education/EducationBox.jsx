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
            <div className="educationbox">
                <FormControl className="educationDetail">
                    <TextField label="School/College" />
                </FormControl>

                <FormControl className="educationDetail">
                    <TextField  label="Degree" />
                </FormControl>

                <FormControl>
               
                <DatePicker selected={this.state.startDate} onChange={date => this.setState({
                            startDate:date
                })} />

                <DatePicker selected={this.state.endDate} onChange={date => this.setState({
                                endDate:date
                    })} />

                <FormControl className="educationDetail">
                    <TextField  label="City" />
                </FormControl>

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
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
              
                </FormControl>
               
            </div>
        )
    }
}

export default EducationBox
