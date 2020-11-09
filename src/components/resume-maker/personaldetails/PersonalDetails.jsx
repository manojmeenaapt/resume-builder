import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './personaldetails.css'
import store from '../../../redux/store'
import {
    UPDATE_JOB_TITLE,
    UDPATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_PHONE,
    UPDATE_COUNTRY,
    UPDATE_CITY,
    UPDATE_ADDRESS,
    UDPATE_POSTAL_CODE,
    UPDATE_DRIVING_LICENSE,
    UPDATE_PLACE_OF_BIRTH,
    UPDATE_DOB,
	UDPATE_NATIONALITY,
	UPDATE_PERSONAL_DETAIL_TITLE
} from '../../../redux/actionTypes.jsx'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import EdiText from "react-editext";


export class PersonalDetails extends Component {
    constructor(props) {
        super(props)
	}
	updatePersonalDetailsTitle = (value) => {
		if(value == ""){
            value = "Personal Detail";
        }
		store.dispatch( {type:UPDATE_PERSONAL_DETAIL_TITLE, payload:{title:value}}) 
	}
        personaldetailHandler = (event) =>{
                        switch (event.target.name) {
                            case 'jobtitle' : 
                            store.dispatch( {type:UPDATE_JOB_TITLE, payload:{jobtitle:event.target.value}}) 
                            break;

                            case 'firstname' : 
                            store.dispatch( {type:UDPATE_FIRST_NAME, payload:{firstname:event.target.value}}) 
                            break; 
                            
                            case 'lastname': 
                            store.dispatch( {type:UPDATE_LAST_NAME, payload:{lastname:event.target.value}}) 
                                     break;
                            
                            case 'email' : 
                            store.dispatch( {type:UPDATE_EMAIL, payload:{email:event.target.value}}) 
                                     break;

                            case 'phone':
                            store.dispatch( {type:UPDATE_PHONE, payload:{phone:event.target.value}}) 
                                     break;

                            case 'country' : 
                            store.dispatch( {type:UPDATE_COUNTRY, payload:{country:event.target.value}}) 
                                     break;
                                     
                            case 'city':
                            store.dispatch( {type:UPDATE_CITY, payload:{city:event.target.value}}) 
                                     break;

                            case 'address' :
                            store.dispatch( {type:UPDATE_ADDRESS, payload:{address:event.target.value}}) 
                                     break;

                            case 'postalcode':
                            store.dispatch( {type:UDPATE_POSTAL_CODE, payload:{postalcode:event.target.value}}) 
                                     break;
                            case 'drivinglicense':
                            store.dispatch( {type:UPDATE_DRIVING_LICENSE, payload:{drivinglicense:event.target.value}}) 
                                    break;

                            case 'nationality':
                            store.dispatch( {type:UDPATE_NATIONALITY, payload:{nationality:event.target.value}}) 
                                    break;

                            case 'placeofbirth':
                            store.dispatch( {type:UPDATE_PLACE_OF_BIRTH, payload:{placeofbirth:event.target.value}}) 
                                    break;
                            case 'dob':
                            store.dispatch( {type:UPDATE_DOB, payload:{dob:event.target.value}}) 
                                     break;

                            default:
                                    break;
                        }
           
     

    }

    render() {
		var title = this.props.personaldetails.title;
        return (
            <div className="block">
                <h4>
					<EdiText
						value={title?title:'Personal Details'}
						type="text"
						onSave={this.updatePersonalDetailsTitle}
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
                <div className="row">
							<div className="col-lg-6">
								<div className="form-group">
									<label>Wanted Job Title <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="text" value={this.props.personaldetails.jobtitle} name='jobtitle' id="job-title" variant="outlined" onChange={this.personaldetailHandler} placeholder="e.g. Teacher"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group d-flex align-items-center user-img">
									<span className="user-icon">
										<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path d="M7,35 L33,35 L33,30 L24.9627594,26.8044586 C24.5698041,26.6156354 24.3340309,26.2379889 24.3340309,25.8225778 L24.3340309,24.6518737 C24.3340309,24.3875212 24.412622,24.1231687 24.6090996,23.9343454 C25.9058522,22.5370535 26.770354,20.4599979 27.0061272,19.8557636 C27.0454227,19.7424697 27.1240138,19.6291757 27.2026048,19.5536464 C27.438378,19.3648232 27.8313333,18.8738828 28.1064021,17.7031787 C28.3421753,16.5702393 27.9099244,15.9282403 27.6348557,15.6261232 C27.4776736,15.4750646 27.3990825,15.2862413 27.3990825,15.0974181 L27.3990825,10.2257787 C26.8882406,7.43119483 25.1592371,6.1094322 23.4302337,5.50519785 C21.5833436,4.82543421 18.2825188,4.82543421 16.3963333,5.5429625 C14.7459209,6.18496149 13.056213,7.46895948 12.5846666,10.2257787 L12.5846666,15.0974181 C12.5846666,15.2862413 12.5060755,15.4750646 12.3488934,15.6261232 C12.0738246,15.9282403 11.6415738,16.5702393 11.877347,17.7031787 C12.1131202,18.8738828 12.545371,19.3648232 12.7811442,19.5536464 C12.8597353,19.6291757 12.9383264,19.7424697 12.9776219,19.8557636 C13.2133951,20.4977626 14.0778968,22.4992889 15.3353539,23.8965808 C15.5318315,24.1231687 15.6497181,24.4252858 15.6497181,24.727403 L15.6497181,25.7470485 C15.6497181,26.2379889 15.3746494,26.6534 14.903103,26.8799879 L7,30 L7,35 Z"></path>
										</svg>
									</span>
									<a href="#">Upload Photo</a>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>First Name</label>
									<input className="form-control" type="text"  value={this.props.personaldetails.firstname} name="firstname" id="firstName" onChange={this.personaldetailHandler} placeholder="First Name"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Last Name</label>
									<input className="form-control" type="text" value={this.props.personaldetails.lastname} name="lastname" id="lastName" onChange={this.personaldetailHandler} placeholder="Last name"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Email</label>
									<input className="form-control" type="text"  value={this.props.personaldetails.email} name="email" id="email" placeholder="Email"  onChange={this.personaldetailHandler}/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Phone</label>
									<input className="form-control" type="text"  value={this.props.personaldetails.phone} name="phone" id="phone" onChange={this.personaldetailHandler} placeholder="Phone"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Country</label>
									<input className="form-control" type="text" value={this.props.personaldetails.country} name="country" id="country" onChange={this.personaldetailHandler} placeholder="Country"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>City</label>
									<input className="form-control" type="text" value={this.props.personaldetails.city} name="city" id="city" onChange={this.personaldetailHandler} placeholder="City"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Address</label>
									<input className="form-control" type="text" value={this.props.personaldetails.address} name="address" id="address" onChange={this.personaldetailHandler} placeholder="Address"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Postal Code</label>
									<input className="form-control" type="text" value={this.props.personaldetails.postalcode} name="postalcode" id="postalCode" onChange={this.personaldetailHandler} placeholder="Postal Code"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Driving License <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="text" value={this.props.personaldetails.drivinglicense} name="drivinglicense" id="dl" onChange={this.personaldetailHandler} placeholder="License No"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Nationality <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="text" value={this.props.personaldetails.nationality} name="nationality" id="nationality" onChange={this.personaldetailHandler} placeholder="Nationality"/>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="form-group">
									<label>Place Of Birth</label>
									<input className="form-control" type="text" value={this.props.personaldetails.placeofbirth} name="placeofbirth" id="placeBirth" onChange={this.personaldetailHandler} placeholder="Place Of Birth"/>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="form-group">
									<label>Date Of Birth <i className="fa fa-question-circle-o"></i></label>
									<input className="form-control" type="date" value={this.props.personaldetails.dob} name="dob" id="dob" onChange={this.personaldetailHandler} placeholder="Date Of Birth"/>
								</div>
							</div>
							
						</div>                
                            {/*<FormControl className="personal-details-fields">
                                <span>Hide Additional Detials</span>
                            </FormControl>*/}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        personaldetails: state.personaldetails
      }
    }


    const PersonalDetailsComp = connect(mapStateToProps)(PersonalDetails)
export default PersonalDetailsComp
