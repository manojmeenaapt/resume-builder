import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
// import { InputLabel } from '@material-ui/core';
// import { Input } from '@material-ui/core';
// import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './personaldetails.css'




export class PersonalDetails extends Component {
    render() {
        return (
            <div className="personal-details">
                <h2>Personal Details</h2>
                            <FormControl className="personal-details-fields">
                                <TextField id="job-title" label="Wanted Job Title" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <Button variant="contained" color="default" ><input type="file" /> </Button>
                            </FormControl>
                            <FormControl className="personal-details-fields">
                                <TextField id="firstName" label="First Name" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="lastName" label="Last Name" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="email" label="Email" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="phone" label="Phone" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="country" label="Country" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="city" label="City" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="address" label="Address" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="postalCode" label="Postal Code" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="dl" label="Driving License" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="nationality" label="Nationality" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="placeBirth" label="Place of Birth" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="dob" label="Date of Birth" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <span>Hide Additional Detials</span>
                            </FormControl>


            </div>
        )
    }
}

export default PersonalDetails
