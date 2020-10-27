import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import WebsiteLinkBox from './WebsiteLinkBox'


export class WebsiteLinks extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            WebsiteLinkBoxes:[]
        }
    }

    addWebsiteLinks(preWebsiteLink){
        preWebsiteLink.push(<WebsiteLinkBox />)
        this.setState({
            WebsiteLinkBoxes : preWebsiteLink
        })
    }

    
   
    render() {
        const WebsiteLinkBoxes = [];
        this.state.WebsiteLinkBoxes.map((websitelink,index) => {
            WebsiteLinkBoxes.push(<React.Fragment key={index}>{websitelink}</React.Fragment>)  
            return true;     
        })

        return (
            <div className="websitelink">
                <h1>Website & Social Links</h1>
                <p>You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website</p>
            <div className="boxes">
                {WebsiteLinkBoxes}
            </div>
                <Button color="primary" onClick={() => { this.addWebsiteLinks(this.state.WebsiteLinkBoxes) }}>
                    +  Add Links
                </Button>
            </div>
        )
    }
}

export default WebsiteLinks
