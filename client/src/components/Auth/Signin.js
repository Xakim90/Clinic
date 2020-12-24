import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../../actions/actions';
import styles from './Signin.module.css';
import { Link } from 'react-router-dom';


class Signin extends Component {
  componentDidMount() {
    console.log(this.props)
    console.log(this.state)
  }


  state = {
    email: "",
    password: ""
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onInputSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onInputSubmit}>
          <h1>Sign In</h1>

          <label className={styles.label}>Email</label>
          <input
            name='email'
            placeholder='please enter your email'
            value={this.state.email}
            onChange={this.onInputChange}
            className={styles.input}
          /><br />

          <label className={styles.label}>Password</label>
          <input
            type='password'
            name='password'
            placeholder='enter the password'
            value={this.state.password}
            onChange={this.onInputChange}
            className={styles.input}
          />
          <div className="col-6">
            <div id="errorDiv" className={styles.errorDiv}></div>
          </div>
          <br />
          <input type='submit' className="btn btn-sm btn-light" />
        </form>
        <br />
        <div>
          <b>У вас еще нет аккаунта? тогда: </b>
          <Link to="/signup" className="btn btn-sm btn-light">Зарегистрируйтесь</Link>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signin);