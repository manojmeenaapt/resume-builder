import React, {Component}from 'react';
import {connect } from 'react-redux';


class Resumedata extends Component {
  render(){
    const {resumetitle, language, personaldetails } = this.props
    return(
      <div className="resumecontainer">
      
           <p>{personaldetails.firstname} {personaldetails.lastname}</p>
           <p>{personaldetails.jobtitle}</p>
           <p>{personaldetails.email}</p>
           <p>{personaldetails.phone}</p>

           <p>{personaldetails.country}</p>
           <p>{personaldetails.city}</p>
           <p>{personaldetails.address}</p>
           <p>{personaldetails.postalcode}</p>
           <p>{personaldetails.drivinglicense}</p>
           <p>{personaldetails.nationality}</p>
           <p>{personaldetails.placeofbirth}</p>
           <p>{personaldetails.dob}</p>

      </div>
    )
  }
}
      const mapStateToProps = state => {
        return state;
      };


    const Rightsidebar = connect(mapStateToProps)(Resumedata)
export default Rightsidebar;
