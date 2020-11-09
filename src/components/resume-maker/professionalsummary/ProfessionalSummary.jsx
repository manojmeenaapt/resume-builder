import React, { Component  } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './ProfessionalSummary.css'
import store from '../../../redux/store'
import {
    UPDATE_PROFESSIONAL_DETAILS,
    UPDATE_PROFESSIONAL_DETAILS_TITLE
} from '../../../redux/actionTypes.jsx'
import { connect } from 'react-redux'
import EdiText from "react-editext";


export class ProfessionalSummary extends Component {
    constructor(props) {
        super(props)
    }
    professionalDetailsHandler = (data) =>{
        store.dispatch( {type:UPDATE_PROFESSIONAL_DETAILS, payload:{description:data}}) 
    }
    professionalDetailsTitleHandler = (data) =>{
        store.dispatch( {type:UPDATE_PROFESSIONAL_DETAILS_TITLE, payload:{title:data}}) 
    }

    render() {
		var title = this.props.professionaldetails.title;
        return (
            <div className="block">
                <h4>
                    <EdiText
						value={title?title:'Professional Summary'}
						type="text"
						onSave={this.professionalDetailsTitleHandler}
						submitOnEnter={true}
						cancelOnEscape={true}
						submitOnUnfocus={true}
						startEditingOnFocus={true}
						editButtonClassName="editbtn"
						saveButtonClassName="savebtn"
						cancelButtonClassName="cancelbtn"
						editContainerClassName="form-control-container"
					/>
                </h4>
                <p>Include 2-3 clear sentences about your overall experience</p>

                <CKEditor
                    editor={ ClassicEditor }
                    data={this.props.professionaldetails.professionalDetails}
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
const mapStateToProps = (state, ownProps) => {
    return {
        professionaldetails: state.professionaldetails
      }
    }


    const ProfessionalSummaryComp = connect(mapStateToProps)(ProfessionalSummary)
export default ProfessionalSummaryComp
