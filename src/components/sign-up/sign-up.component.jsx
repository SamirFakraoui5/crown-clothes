import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    
  }

  // submit the form and create the user
  HandleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    // check the password
    if (password !== confirmPassword) {
      alert("password don't much");
      return;
    }
    try {
      // create a user object
      // await for it until finich because it
      // commes from an API request
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // check the user if it's existe if it's not we create one
      await createUserProfileDocument(user, { displayName });

      // reset the input value to impty
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have a account</h2>
        <span Sign up with your email and password></span>
        <form className="sign-up-form" onSubmit={this.HandleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.HandleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.HandleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.HandleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.HandleChange}
            label="Confirme Password"
            required
          />
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
