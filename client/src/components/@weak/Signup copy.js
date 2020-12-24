import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../../redux/actions';
import * as axios from "axios";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    //this.props.userPostFetch(this.state);

         axios.post(`/api/users`, {

             name: this.state.name,
             email: this.state.email,
             password: this.state.password,
             role: this.state.role,

         })
           .then(res => {
             console.log(res);
             console.log(res.status);
             console.log(res.data);
           })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>name</label>
        <input
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
          /><br/>

        <label>email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>


                  <label>
                    Выберите ваш роль:
                    <select value={this.state.role} name='role' onChange={this.handleChange}>
                      <option>Выберите роль</option>
                      <option value="admin">admin</option>
                      <option value="operator">operator</option>
                      <option value="client">client</option>
                    </select>
                  </label>
            
          <br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
