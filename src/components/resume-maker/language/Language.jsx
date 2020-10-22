import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';



export class Language extends Component {
    constructor(props){
        super(props)

        this.state = {
            defaultLanguage:'ENG'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            defaultLanguage:event.target.value
        })
    };
    
    render() {
        const language = [
            {
              value: 'ENG',
              label: 'English',
            },
            {
              value: 'HI',
              label: 'Hindi',
            }
          ];


        return (
            <div className="language">
                <TextField
                    id="standard-select-currency"
                    select={true}
                    label="Select language"
                    value={this.state.defaultLanguage}
                    onClick={(event)=> this.handleChange(event)}
                    helperText="Please select your currency"
                >
                    {language.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
            </div>
        )
    }
}

export default Language
