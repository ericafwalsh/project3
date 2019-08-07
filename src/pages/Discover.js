import React, { Component } from "react";
// import API from "../utils/API";


class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {serialNumber: "",
    name: "",
    address: "",
    phoneNumber: "",
    history: "",
    medications: "",
    allergies: "",
    eContactName: "",
    eContactPhoneNumber: "",
    eContactEmail: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log("the form worked!")
    console.log(this.state.address);
    event.preventDefault();
    event.target.reset();
  }

  render() {
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>

          {/* Serial number */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Button Serial Number</label>
                <input type="text" className="form-control" name="serialNumber" onChange={this.handleChange} placeholder="Enter serial number"></input>
                <small id="emailHelp" className="form-text text-muted">This is found on the bottom of the button with 4 numbers and 4 letters.</small>
              </div>
              <div className="col">
                <img className="buttonPic" src="https://media.amazonwebservices.com/blog/2017/IoTEnterprise-16-AWSIoTButtonSerialNum-sm.png" alt="amazonButtonBack"></img>
              </div>
            </div>
          </div>

          {/* Name */}
          <h5 className="formHeader">Button User's Information</h5>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" name="name" onChange={this.handleChange} placeholder="Enter your name"></input>
              <small id="emailHelp" className="form-text text-muted">This is the name of the person who will be using the button.</small>
            </div>
          </div>

          {/* Address */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" name="address" onChange={this.handleChange} placeholder="e.g. 14 Locust Drive, Ringwood, NJ"></input>
              <small id="emailHelp" className="form-text text-muted">This is the address of the person who will be using the button.</small>
            </div>
          </div>

          {/* Phone number */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone number</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" name="phoneNumber" onChange={this.handleChange} placeholder="xxx-xxx-xxxx"></input>
              <small id="emailHelp" className="form-text text-muted">This is the phone number of the person who will be using the button.</small>
            </div>
          </div>

          {/* Medical history */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Medical history</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="history" onChange={this.handleChange} id="inputEmail3"></input>
            </div>
          </div>

          {/* Medications*/}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Medications</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="medications" onChange={this.handleChange} id="inputEmail3"></input>
            </div>
          </div>

          {/* Allergies*/}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Allergies</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="allergies" onChange={this.handleChange} id="inputEmail3"></input>
            </div>
          </div>

          {/* Emergency Contact Name */}
          <h5 className="formHeader">Emergency Contact Information</h5>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" name="eContactName" onChange={this.handleChange} placeholder="Enter name"></input>
              <small id="emailHelp" className="form-text text-muted">This is the name of the primary emergency contact.</small>
            </div>
          </div>

          {/* Emergency Contact number */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone number</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" name="eContactPhoneNumber" onChange={this.handleChange} placeholder="xxx-xxx-xxxx"></input>
              <small id="emailHelp" className="form-text text-muted">This is the phone number of the primary emergency contact.</small>
            </div>
          </div>

          {/* Emergency Contact email */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" name="eContactEmail" onChange={this.handleChange} placeholder="Enter email"></input>
              <small id="emailHelp" className="form-text text-muted">This is the email address of the primary emergency contact.</small>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Discover;
