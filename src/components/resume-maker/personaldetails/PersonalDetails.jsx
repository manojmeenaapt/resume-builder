import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './personaldetails.css'




export class PersonalDetails extends Component {
    render() {
        return (
            <div className="personal-details">
                <h2>Personal Details</h2>
                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Wanted Job Title" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <Button variant="contained" color="default" ><input type="file" /> </Button>
                            </FormControl>
                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Email" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Country" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="City" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Address" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Postal Code" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Driving License" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Nationality" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Place of Birth" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <TextField id="outlined-basic" label="Date of Birth" variant="outlined" />
                            </FormControl>

                            <FormControl className="personal-details-fields">
                                <span>Hide Additional Detials</span>
                            </FormControl>


            </div>
        )
    }
}

export default PersonalDetails
