import React, { Component } from "react";
import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';

class offerForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  constructor(props) {
    super(props);
    this.state = {
      offered: "",
      offeredQTY: "",
      offeredUnits: "lbs",
      asked: "",
      askedQTY: "",
      askedUnits: "lbs"
    };
  }

  // handle any changes to the input fields
  handleInputChange = e => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    // Set the state for the appropriate input field
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    // alert(`offered: ${this.state.offer}\nofferedUnits: ${this.state.offeredUnits}\nofferedQTY: ${this.state.offeredQTY}\nasked: ${this.state.asked}\naskedQTY: ${this.state.askedQTY}\naskedUnits: ${this.state.askedUnits}`);
    console.log(this.state);
    axios.post("/api/deals", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)})
    // fetch("http://localhost:3000/api/deals",
    // {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: "POST",
    //     body: JSON.stringify({
    //       UserId: "2",
    //       offered: this.state.offered,
    //       offerQTY: this.state.offeredQTY,
    //       offerUnits: this.state.offeredUnits,
    //       asked: this.state.asked,
    //       askedQTY: this.state.askedQTY,
    //       askedUnits: this.state.askedUnits,
    //       status: "open"
    //     })
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(function(res){ console.log(res) });
    // this.setState({ offered: "", offeredQTY: "", offeredUnits: "", asked: "", askedQTY: "", askedUnits: ""});
  };
    

  render() {
    const {offered, offeredQTY, offeredUnits, asked, askedQTY, askedUnits} = this.state;
    
    return (

      <div className="table table-striped table-bordered text-center" style={{
        borderRadius: '10px',
        border: '1px solid black',
        width: '70%',
        height: '50%',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#AA8CBB',
        marginLeft: '15%',
        

      }}>

        <form className="makeofferform" style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          // position: "absolute",
          flex: 1,
          right: 0,
          left: 0,
        }}>
          <label>Offered:</label>
          <input
            type="text"
            placeholder="Offering"
            name="offered"
            value={offered}
            onChange={this.handleInputChange}
          />
          <label>Offer Quantity:</label>
          <input
            type="number"
            placeholder="Quantity"
            name="offeredQTY"
            value={offeredQTY}
            onChange={this.handleInputChange}
          />
          <select name="offeredUnits" size="1" id = 'offeredUnits' value={offeredUnits} onChange={this.handleInputChange}>
                    <option value="lbs">lbs.</option>
                    <option value="oz">oz.</option>
                    <option value="dozen">dozen</option>
                    <option value="units">(units)</option>
          </select>
          <br></br>
          <br></br>
          <p>AND</p>
          <br></br>

          <label>Asking:</label>
          <input
            type="text"
            placeholder="Asking"
            name="asked"
            value={asked}
            onChange={this.handleInputChange}
          />

          <label>Asked Quantity:</label>
          <input
            type="number"
            placeholder="Quantity"
            name="askedQTY"
            value={askedQTY}
            onChange={this.handleInputChange}
          />
          <select name="offeredUnits" size="1" id = 'askedUnits' value={askedUnits} onChange={this.handleInputChange}>
                    <option value="lbs">lbs.</option>
                    <option value="oz">oz.</option>
                    <option value="dozen">dozen</option>
                    <option value="units">(units)</option>
          </select>
          <br></br>
          <br></br>

          <button type="submit" onClick={this.handleFormSubmit}>Submit Offer!</button>
        </form>
        <br></br>
        <br></br>
      </div>
      


    )};
  
};

export default offerForm;