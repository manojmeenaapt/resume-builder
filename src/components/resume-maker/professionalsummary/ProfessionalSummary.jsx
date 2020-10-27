import React, { Component  } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './ProfessionalSummary.css'



export class ProfessionalSummary extends Component {
    render() {
        return (
            <div className="professional-summary">
                <h3>Professional Summary</h3>
                <p className="description-text">Include 2-3 clear sentences about your overall experience</p>


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


            </div>
        )
    }
}

export default ProfessionalSummary
