import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import WebsiteLinkBox from './WebsiteLinkBox'
import { connect } from 'react-redux'
import {
    Add_WEBSITE_LINK_BOX,
    DELETE_WEBSITE_LINK_BOX
} from '../../../redux/actionTypes.jsx'
import store from '../../../redux/store'


export class WebsiteLinks extends Component {

    constructor(props){
        super(props)
    }

    addWebsiteLinkBox(){
        var next_key = 0;
        var websitelink_array = this.props.website_link.website_link;
        if(websitelink_array.length !== 0){
            var get_last_element = websitelink_array[websitelink_array.length - 1];
            var get_last_key = get_last_element.key;
            next_key = get_last_key+1;    
        }
        store.dispatch( {type:Add_WEBSITE_LINK_BOX, payload:{number:next_key}}) 
    }
    deleteWebsiteLinkBox(index){
        store.dispatch( {type:DELETE_WEBSITE_LINK_BOX, payload:{number:index}}) 
    }

    
   
    render() {
        return (
            <div className="block">
                <h4>Website & Social Links</h4>
                <p>You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website</p>
            <div className="boxes">
            {
                    this.props.website_link.website_link.map((item) => {  
                        return <WebsiteLinkBox  number={item.key} label={item.label} link={item.link} key={item.key} deleteWebsiteLinkBox={(index) => this.deleteWebsiteLinkBox(index)} />   
                    })

                }
            </div>
                <a href={void(0)}  onClick={() => { this.addWebsiteLinkBox() }}>
                    +  Add Links
                </a>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        website_link: state.website_link
      }
    }


    const WebsiteLinksComp = connect(mapStateToProps)(WebsiteLinks)
export default WebsiteLinksComp
