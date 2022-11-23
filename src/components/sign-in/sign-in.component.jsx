import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  HandlSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  HandlChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action={this.HandlSubmit}>
          <FormInput
            name="email"
            type="email"
            HandleChange={this.HandlChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            HandleChange={this.HandlChange}
            value={this.state.password}
            label="Password"
            required
          />
          <CustomButton type="submit" >Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;