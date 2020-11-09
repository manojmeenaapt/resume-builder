import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import store from '../../../redux/store'
import { UPDATE_RESUME_TITLE } from '../../../redux/actionTypes'
import { connect } from 'react-redux'
import EdiText from "react-editext";
export class ResumeTitle extends Component {
    constructor(props) {
        super(props); 
      }
    updateResumeTitle = (value) =>{
        if(value == ""){
            value = "Untitled";
        }
        store.dispatch( {type:UPDATE_RESUME_TITLE, payload:{title:value}});
    }


    render() {
        var title = this.props.resumetitle.title;
        return (
            <div className="top text-center">
                <div className="form-group">
                    <h3>
                    <EdiText
                    value={title}
                    type="text"
                    onSave={this.updateResumeTitle}
                    submitOnEnter={true}
                    cancelOnEscape={true}
                    submitOnUnfocus={true}
                    startEditingOnFocus={true}
                    editButtonClassName="editbtn"
                    saveButtonClassName="savebtn"
                    cancelButtonClassName="cancelbtn"
                    editContainerClassName="form-control-container"
                    />
                    
                    </h3>
                    {/*<input className="form-control" value={this.props.resumetitle.title} type="text" name="" placeholder="Resume Title" onChange={this.updateResumeTitle}/>*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        resumetitle: state.resumetitle
      }
    }


    const TitleofResume = connect(mapStateToProps)(ResumeTitle)
export default TitleofResume
