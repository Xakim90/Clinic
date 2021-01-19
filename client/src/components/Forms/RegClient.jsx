import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clientPostFetch } from '../../actions/actions';
import styles from './RegClient.module.css';

class RegClient extends Component {
  state = {
    name: '',
    surname: '',
    complaint: '',
    history: '',
  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  clearState() {
    this.setState({ name: '', surname: '', complaint: '', history: '' });
  }

  submit = (event) => {
    event.preventDefault();
    this.props.clientPostFetch(this.state);
    this.clearState();
  };

  render() {
    return (
      <div className="flex flex-col md:flex-row">
        <form onSubmit={this.submit}>
          <h1>Регистрация нового пациента</h1>

          <label className={styles.label}>Имя</label>
          <input
            name="name"
            placeholder="Имя"
            value={this.state.name}
            onChange={this.change}
          />
          <br />

          <label className={styles.label}>Фамилия</label>
          <input
            type="text"
            name="Фамилия"
            placeholder="surname"
            value={this.state.surname}
            onChange={this.change}
          />
          <br />

          <label className={styles.label}>Жалобы</label>
          <textarea
            name="complaint"
            placeholder="Жалобы"
            value={this.state.complaint}
            onChange={this.change}
          />
          <br />

          <label className={styles.label}>История болезни:</label>
          <textarea
            placeholder="История болезни"
            value={this.state.history}
            name="history"
            onChange={this.change}
          />
          <br />
          <div className="col-md-6">
            <p id="signupErrorDiv" className={styles.errorDiv}></p>
          </div>
          <input type="submit" className="btn btn-sm btn-light" />
        </form>
        <br />
        <div className="signup">
          <Link to="/table" className="btn btn-sm btn-light">
            Просмотреть таблицу всех клиентов
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clientPostFetch: (clientInfo) => dispatch(clientPostFetch(clientInfo)),
});

export default connect(null, mapDispatchToProps)(RegClient);
