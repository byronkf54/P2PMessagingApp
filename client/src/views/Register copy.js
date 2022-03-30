import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component{

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    // fetch("http://localhost:9000/testAPI?test=1&test2=2&test3=3&test4=4")
    //   .then(res => res.text())
    //   .then(res => this.setState({ apiResponse: res }))
    //   .catch(err => err);
  }

  componentDidMount() {
      //this.callAPI();
  }

  render() {
    return (
      <div className="Register">
        <p className='display-2'>Welcome to BKF P2P Messaging App</p>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="Register-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default Register;
