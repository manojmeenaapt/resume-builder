import React, { Component } from 'react'
import store from '../../../redux/store'
import { UPDATE_RESUME_LANGUAGE } from '../../../redux/actionTypes'
// import { connect } from 'react-redux'
import { connect } from 'react-redux'
export class Language extends Component {
    constructor(props){
        super(props)
    }
    handleChange = (event) => {
        store.dispatch( {type:UPDATE_RESUME_LANGUAGE, payload:{currentLanguage:event.target.value}}) ;
    };
    
    render() {
        return (
            <div className="language">
                <select defaultValue={this.props.language.currentLanguage} onChange={(event)=> this.handleChange(event)}>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        language: state.language
      }
    }
const LanguageComp = connect(mapStateToProps)(Language)
export default LanguageComp
