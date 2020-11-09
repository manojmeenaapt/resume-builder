import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import {
    UPDATE_LABEL,
    UDPATE_LINK
} from '../../../redux/actionTypes.jsx'
import store from '../../../redux/store'

export class WebsiteLinkBox extends Component {

    constructor(props) {
        super(props);
      }

      websiteLinkDetailsHandler = (event) =>{
        switch (event.target.name) {
            case 'label' : 
            store.dispatch( {type:UPDATE_LABEL, payload:{label:event.target.value, number:this.props.number}}) 
            break;

            case 'link' : 
            store.dispatch( {type:UDPATE_LINK, payload:{link:event.target.value, number:this.props.number}}) 
            break; 
            default:
                    break;
        }
    }

 

    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" href={`#websitelink-collapse-${this.props.number}`}>
                        <div className="panel-inner">
                        <div className="sc-iUpOdG fIJKcW">
                            <div className="sc-kGeDwz sc-hgeeVt jSLZTO">
                                {this.props.label?this.props.label:"(Not Specified)"}
                            </div>
                        </div>
                        <div className="sc-cKZAiZ sc-klSiHT LYHIX">
                            <div className="sc-iUVpnZ jKxQkF">
                                Expand
                            </div>
                            <div className="sc-bWFPNQ eqtGtW">
                                <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z">
                                    </path>
                                </svg>
                            </div>
                        </div>                        
                        </div>
                    </div>
                <div id={`websitelink-collapse-${this.props.number}`} className="panel-collapse collapse">
                <div className="panel-body">

            <div className="row">
							<div className="col-lg-6">
								<div className="form-group">
									<label>Label</label>
									<input className="form-control" value={this.props.label}  onChange={this.websiteLinkDetailsHandler} type="text"  name='label' placeholder="Label"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group">
									<label>Link</label>
									<input className="form-control" value={this.props.link}  onChange={this.websiteLinkDetailsHandler}  name='link' placeholder="Link"/>
								</div>
							</div>
                            <div className="col-lg-12">
                                <a href={void(0)} onClick={() => { this.props.deleteWebsiteLinkBox(this.props.number) }}>
                                    -  Delete
                                </a>
                            </div>
            </div>
            </div>
                </div>
            </div>
            </div>
        )
    }
}

export default WebsiteLinkBox
