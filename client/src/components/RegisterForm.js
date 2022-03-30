import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export const RegisterForm = () => 
{
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  }  

  let handleSubmit = async(event) => {
    // prevent page reload
    event.preventDefault();

    // send to back end
    try {
      let res = await fetch("http://localhost:9000/users/createAsync", {
        method: "POST",
        body: JSON.stringify({
          name: document.forms[0].name,
          email: document.forms[0].email,
          password: document.forms[0].password
        }),
      });

      if (res.status === 200) {
        setName("");
        setEmail("");
        setPassword("");        
        setMessage("User created successfully");
        $("#registerForm").hide();
      }
      else {
        setMessage(res);
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  const renderForm = (
    <div className='container'>
      <form onSubmit={handleSubmit} id="registerForm">
      <input
        type="text"
        className='row'
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <input
        type="text"
        className='row'
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Create</button>
      </form>

    <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <h2 className="title">Sign In</h2>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RegisterForm/>, rootElement);