import React, { Component } from 'react';
import logo from './logo.svg';
import PatientList from './patientList';
import './App.css';
import $ from 'jquery';

const BASE_URL = 'http://localhost:3001';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      patients: []
    }
  }

  getPatients() {
    $.ajax({
      url: `${BASE_URL}/api/v1/patients`,
      success: function(patients){
        // once we receive the questions from our server, we store it in the state
        this.setState({patients: patients})
      // this function is called asynchronously, therefore we must bind(this) to be able to use this.setState
      }.bind(this)
    })
  }

  componentDidMount() {
    this.getPatients()
  }

  render() {

    var content;

    content = <PatientList patients={this.state.patients} />

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
