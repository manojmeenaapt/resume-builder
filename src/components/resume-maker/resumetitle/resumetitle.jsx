import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import store from '../../../redux/store'
import { UPDATE_RESUME_TITLE } from '../../../redux/actionTypes'
import { connect } from 'react-redux'

export class ResumeTitle extends Component {
    updateResumeTitle = (event) =>{
        store.dispatch( {type:UPDATE_RESUME_TITLE, payload:{title:event.target.value}}) ;
    }


    render() {
        return (
            <div className="top text-center">
                <div className="form-group">
                    <h3>Resume Title</h3>
                    <input className="form-control" value={this.props.resumetitle.title} type="text" name="" placeholder="Resume Title" onChange={this.updateResumeTitle}/>
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
