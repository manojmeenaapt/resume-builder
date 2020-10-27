import React, { Component } from 'react'
import store from '../../../redux/store'
import { UPDATE_RESUME_LANGUAGE } from '../../../redux/actionTypes'
import { connect } from 'react-redux'

export class Language extends Component {
    constructor(props){
        super(props)

        this.state = {
            defaultLanguage:'eng'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            defaultLanguage:event.target.value
        })
        store.dispatch( {type:UPDATE_RESUME_LANGUAGE, payload:{language:event.target.value}}) ;
    };
    
    render() {
        return (
            <div className="language">
                <select onChange={(event)=> this.handleChange(event)}>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
            </div>
        )
    }
}

export default Language
