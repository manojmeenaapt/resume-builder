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
    UDPATE_NATIONALITY
} from '../../../redux/actionTypes.jsx'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class PersonalDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            jobtitle:'',
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            country:'',
            city:'',
            address:'',
            postalcode:'',
            drivinglicense:'',
            nationality:'',
            placeofbirth:'',
            dob:''
        }
    }
    

        personaldetailHandler = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
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
        return (
            <div className="personal-details">
                <h2>Personal Details</h2>
                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.jobtitle} name='jobtitle' id="job-title" label="Wanted Job Title" variant="outlined" onChange={this.personaldetailHandler}/>
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <Button variant="contained" color="default" ><input type="file" /> </Button>
                            </FormControl>
                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.firstname} name="firstname" id="firstName" onChange={this.personaldetailHandler} label="First Name" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.lastname} name="lastname" id="lastName" onChange={this.personaldetailHandler} label="Last Name" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.email} name="email" id="email" label="Email" onChange={this.personaldetailHandler} variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.phone} name="phone" id="phone" label="Phone" onChange={this.personaldetailHandler} variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.country} name="country" id="country" label="Country" onChange={this.personaldetailHandler} variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.city} name="city" id="city" label="City" variant="outlined" onChange={this.personaldetailHandler} />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.address} name="address" id="address" label="Address" variant="outlined" onChange={this.personaldetailHandler} />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.postalcode} name="postalcode" id="postalCode" label="Postal Code" variant="outlined" onChange={this.personaldetailHandler} />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.drivinglicense} name="drivinglicense" id="dl" label="Driving License" variant="outlined" onChange={this.personaldetailHandler} />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.nationality} name="nationality" id="nationality" label="Nationality" variant="outlined" onChange={this.personaldetailHandler} />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField value={this.state.placeofbirth} name="placeofbirth" id="placeBirth" label="Place of Birth" variant="outlined" onChange={this.personaldetailHandler} />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                            <DatePicker selected={this.state.dob} name="dob" id="dob" onChange={date => this.setDate(date)} />

                                <TextField value={this.state.dob} name="dob" id="dob" label="Date of Birth" variant="outlined" onChange={this.personaldetailHandler}/>
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <span>Hide Additional Detials</span>
                            </FormControl>
            </div>
        )
    }
}

export default PersonalDetails
