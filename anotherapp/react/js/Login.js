import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { LocalStorage } from "reactRoot/Components";


const Inputs = props => {
  return (
    <div className="input-form">
      <p>
        {props.label}
      </p>
      <input
        type={props.inputType}
        name={props.inputName}
        defaultValue={props.inputValue}
        onChange={props.onValueChange}
      />
    </div>
  );
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      username: "manju",
      password: "Qwerty1.",
      isLoggedIn: LocalStorage.isLoggedIn()
    };
  }

  onClickLogin(e) {
    let data = new FormData();
    data.append(
      "data",
      JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    );

    fetch(window.location.origin+"/login/", {
      method: "post",
      credentials: "include",
      body: data,
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then(json => {
        window.localStorage.setItem("isLoggedIn", true);
        window.localStorage.setItem("username", json.username);
        this.setState({ isLoggedIn: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onValueChange(e) {
    let inputName = e.currentTarget.name;
    let inputValue = e.currentTarget.value;
    this.setState({
      [inputName]: inputValue
    });
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn;
    if (!isLoggedIn) {
      return (
        <div id="login-form">
          <Inputs
            label="Username : "
            inputType="text"
            inputName="username"
            inputValue={this.state.username}
            onValueChange={this.onValueChange}
          />
          <Inputs
            label="Password : "
            inputType="password"
            inputName="password"
            inputValue={this.state.password}
            onValueChange={this.onValueChange}
          />
          <div className="form-submit-btn">
          <input
            className="themed-btn"
            type="button"
            onClick={this.onClickLogin}
            name="login"
            value="Login"
          />
          </div>
        </div>
      );
    } else {
      window.location.pathname = "/"
      return null;
    }
  }
}


ReactDOM.render((
  <Login />
), document.getElementById('login-react-root'))
