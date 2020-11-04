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
            <div className="row">
							<div className="col-lg-6">
								<div className="form-group">
									<label>Label</label>
									<input className="form-control" type="text"  name='label' placeholder="Label"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Link</label>
									<input className="form-control" name='link' placeholder="Link"/>
								</div>
							</div>
                            <div className="col-lg-12">
                                <a href={void(0)} onClick={() => { this.props.deleteEmploymentBox(this.state.mynumber) }}>
                                    -  Delete
                                </a>
                            </div>
            </div>
        )
    }
}

export default EducationBox
