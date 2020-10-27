import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export class EducationBox extends Component {

    constructor(props) {
        super(props);
            this.state = {
                startDate:new Date(),
                endDate:new Date()
            }
   
      }


 

    render() {
        return (
            <div className="educationbox">
                <FormControl className="educationDetail">
                    <TextField label="Label" />
                </FormControl>

                <FormControl className="educationDetail">
                    <TextField  label="Link" />
                </FormControl>
               
            </div>
        )
    }
}

export default EducationBox
