import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import * as axios from "axios";

class Login extends React.Component {
    state = {
      name: "",
      email: "",
      password: "",
    }

    handleSubmit = event => {
      event.preventDefault();
  
      axios.post(`/api/users`, { 
          name: "Rustam",
          email: "rustik@com",
          password: "1111",
  
      })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

  render() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mt-3">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit = {this.handleSubmit}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    id="name"
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    id="email"
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    id = "confirm"
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    id="password" label="Your password"  icon="lock" group type="password" validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" id="btn" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
  }
};




export default Login;