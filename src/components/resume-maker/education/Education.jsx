import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import EducationBox from './EducationBox'
import { connect } from 'react-redux'
import {
    Add_NEW_EDUCATION_BOX,
    DELETE_EDUCATION_BOX
} from '../../../redux/actionTypes.jsx'
import store from '../../../redux/store'


export class Education extends Component {

    constructor(props){
        super(props)
    }

    addEducationBox(){
        var next_key = 0;
        var education_array = this.props.education.education;
        if(education_array.length !== 0){
            var get_last_element = education_array[education_array.length - 1];
            var get_last_key = get_last_element.key;
            next_key = get_last_key+1;    
        }
        store.dispatch( {type:Add_NEW_EDUCATION_BOX, payload:{number:next_key}}) 
    }
    deleteEducationBox(index){
        store.dispatch( {type:DELETE_EDUCATION_BOX, payload:{number:index}}) 
    }

    
   
    render() {
        return (
            
            <div className="block">
                <h4>Education</h4>
                <p>If relevant, include your most recent educational achievements and the dates here</p>
            <div className="boxes">
            {
                    this.props.education.education.map((item) => {  
                        return <EducationBox  number={item.key} school_college={item.school_college} degree={item.degree} city={item.city} startDate={item.startDate} endDate={item.endDate} key={item.key} deleteEducationBox={(index) => this.deleteEducationBox(index)} />   
                    })

                }
            </div>
                <a href={void(0)} onClick={() => { this.addEducationBox() }}>
                    +  Add Education
                </a>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        education: state.education
      }
    }


    const EducationComp = connect(mapStateToProps)(Education)
export default EducationComp
