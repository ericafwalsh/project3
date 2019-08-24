import React, { Component } from "react";
import API from "../utils/API";

// import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// // import API from "../../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

// var email = localStorage.getItem("email");


class UpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serialNumber: "",
      name: "",
      address: "",
      phoneNumber: "",
      history: "",
      medications: "",
      allergies: "",
      eContactName: "",
      eContactPhoneNumber: "",
      eContactEmail: "",
      // email: email,
      id: ""
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // // When the component mounts, load all books and save them to this.state.books
    // componentDidMount() {
    //   this.loadBooks(email);
    //   // console.log(this.state.id);
    // }
  
    // // Loads all books  and sets them to this.state.books
    // loadBooks = email => {
    //   API.getBook(email)
    //     .then(function(res){
    //       console.log("getting data back: " + res.data._id)
    //       // this.setState({ id: res.data._id })
    //     })

    //     .catch(err => console.log(err));
        
    // };


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log("the form worked!");
    event.preventDefault();
    event.target.reset();
    API.updateBook({
      serialNumber: this.state.serialNumber,
      name: this.state.name,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      history: this.state.history,
      medications: this.state.medications,
      allergies: this.state.allergies,
      eContactName: this.state.eContactName,
      eContactPhoneNumber: this.state.eContactPhoneNumber,
      eContactEmail: this.state.eContactEmail
      // email: email
    })
      .then(
        this.props.history.push('/')
        )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>

          {/* Serial number */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Update Serial Number</label>
                <input type="text" className="form-control" name="serialNumber" onChange={this.handleChange} placeholder="Enter serial number"></input>
                <small id="emailHelp" className="form-text text-muted">This is the DSN number. 16 characters</small>
              </div>
              <div className="col">
              <img className="buttonPic" src="https://i.imgur.com/cnI6HbN.png" style={{width: 400}} alt="amazonButton"></img>
              </div>
            </div>
          </div>

          {/* Name */}
          <h5 className="formHeader">Update the Button User's Information</h5>
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
          <h5 className="formHeader">Update the Emergency Contact Information</h5>
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

          <button type="submit" className="btn btn-primary">Update Your Button</button>
        </form>

        {/* <Col size="md-6 sm-12">
           <Jumbotron>
             <h1>Books On My List</h1>
           </Jumbotron>
           {this.state.books.length ? (
             <List>
               {this.state.books.map(book => {
                 return (
                   <ListItem key={book._id}>
                     <a href={"/books/" + book._id}>
                       <strong>
                         {book.name} by {book.address}
                       </strong>
                     </a>
                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                   </ListItem>
                 );
               })}
             </List>
           ) : (
             <h3>No Results to Display</h3>
           )}
         </Col>


 */}



      </div>
    );
  }
}

export default UpdateForm;