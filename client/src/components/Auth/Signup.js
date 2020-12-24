import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userPostFetch } from '../../actions/actions';
import styles from './Signin.module.css'

class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    role: '',
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  clearState() {
    this.setState({ username: "", email: "", password: "", role: "" });
  }


  submit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
    this.clearState();
  }

  render() {
    return (
      <>
        <form onSubmit={this.submit}>
          <h1>Sign Up For An Account</h1>

          <label className={styles.label}>name</label>
          <input
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.change}
          /><br />

          <label className={styles.label}>email</label>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.change}
          /><br />

          <label className={styles.label}>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.change}
          /><br />


          <label className={styles.label}>role:</label>
          <select value={this.state.role} name='role' onChange={this.change}>
            <option>Select your role</option>
            <option value="admin">admin</option>
            <option value="operator">operator</option>
            <option value="client">client</option>
          </select>
          <br />
          <div className="col-md-6">
            <p id="signupErrorDiv" className={styles.errorDiv}></p>
          </div>
          <input type='submit' className="btn btn-sm btn-light" />
        </form>
        <br />
        <div className="signup">
          <b>У вас уже есть аккаунт? тогда: </b>
          <Link to="/signin" className="btn btn-sm btn-light">Войдите</Link>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
