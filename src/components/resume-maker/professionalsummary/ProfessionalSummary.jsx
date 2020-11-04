import React, { Component  } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './ProfessionalSummary.css'
import store from '../../../redux/store'
import {
    UPDATE_PROFESSIONAL_DETAILS
} from '../../../redux/actionTypes.jsx'


export class ProfessionalSummary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            professionalDetails:'',
        }
    }
    professionalDetailsHandler = (data) =>{
        store.dispatch( {type:UPDATE_PROFESSIONAL_DETAILS, payload:data}) 
    }

    render() {
        return (
            <div className="block">
                <h4>Professional Summary</h4>
                <p>Include 2-3 clear sentences about your overall experience</p>


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
                        this.professionalDetailsHandler(editor.getData());
                        //const data = editor.getData();
                        //console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />


            </div>
        )
    }
}

export default ProfessionalSummary
