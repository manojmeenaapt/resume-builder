import LeftSidebar from './leftsidebar/leftsidebar'
import RightSidebar from './rightsidebar/rightsidebar'

import React, { Component } from 'react'

export class ResumerMaker extends Component {
    render() {
        return (
            <div className="resumemaker">
                <LeftSidebar />
                <RightSidebar /> 
            </div>
        )
    }
}

export default ResumerMaker
