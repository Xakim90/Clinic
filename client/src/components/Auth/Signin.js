import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../../actions/actions';
import styles from './Signin.module.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { usersAPI } from '../../actions/api'
import { makeStyles } from '@material-ui/core';


class Signin extends Component {
  state = {
    email: "",
    password: ""
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onInputSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
  }

  render() {
    return (
      <div className="grid grid-cols-1 gap-12">
        <form onSubmit={this.onInputSubmit}>
          <h1>Вход</h1>
          <br/>
          <span>Вы можете ввести email:admin@gmail.com и пароль:admin чтобы войти и протестировать систему!</span>
          <br />
          <br />
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
            value={this.state.email}
            onChange={this.onInputChange}
            size="small"
            name="email"
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={this.state.password}
            onChange={this.onInputChange}
            size="small"
            name="password"
          />
          <div className="col-6">
            <div id="errorDiv" className={styles.errorDiv}></div>
          </div>
          <br />
          <input type="submit" className="btn btn-sm btn-light" />
        </form>
        <div>
          <b>У вас еще нет аккаунта? тогда: </b>
          <Link to="/signup" className="btn btn-sm btn-light">
            Зарегистрируйтесь
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(usersAPI.userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signin);