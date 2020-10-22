import React, { Component,useRef  } from 'react'
import JoditEditor from "jodit-react";


export class ProfessionalSummary extends Component {

    constructor(props){
        super(props)
            this.state = {
                content:""
            }

            const editor = React.createRef();
        
    }


    render() {
       
        const config = {
            readonly: false,
            buttons: ['bold', 'italic', 'source'],
            buttonsMD: ['bold', 'italic'],
            buttonsXS: ['bold', 'fullsize'],
            spellcheck: true,
            removeButtons: [],

        }
        return (
            <div className="professional-summary">
                <h3>Professional Summary</h3>
                <p className="description-text">Include 2-3 clear sentences about your overall experience</p>
                <JoditEditor
            	ref={this.editor}
                value={this.state.content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => this.setState({
                    content:newContent
                })} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
             

            </div>
        )
    }
}

export default ProfessionalSummary
