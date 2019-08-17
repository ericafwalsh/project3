import React from 'react';
import { withRouter } from 'react-router-dom';
import { State } from 'react-powerplug';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import "./sign.css"

class SignIn extends React.Component {
  handleSubmit = ({ email, password }) => {
    return auth
      .doSignInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('Successful Sign In', response);
        this.props.history.push(routes.HOME_PATH);
      })
      .catch(err => {
        console.log('Failed Sign In', err);
        throw err;
      });
  };

  render() {
    return (
      <div className="signWrapper">
        <State initial={{ email: '', password: '', error: null }}>
          {({ state, setState }) => {
            const onEmailChange = e => {
              setState({ email: e.target.value });
            };
            const onPasswordChange = e => {
              setState({ password: e.target.value });
            };
            const onSubmit = e => {
              e.preventDefault();
              this.handleSubmit({
                email: state.email,
                password: state.password,
              }).catch(err => {
                setState({ error: err.message });
              });
            };

            return (
              <div>
                <h1 className="signHeader">Sign In</h1>
                <form onSubmit={onSubmit}>
                  {state.error &&
                    <p style={{ color: 'red' }}>
                      {state.error}
                    </p>}

                  {/* Email */}
                  <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputEmail3" name="email" value={state.email} onChange={onEmailChange}></input>
                    </div>
                  </div>

                  {/* Password*/}
                  <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputEmail3" name="password" value={state.password} onChange={onPasswordChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                  </div>
                </form>
              </div>
            );
          }}
        </State>
      </div>
    );
  }
}

export default withRouter(SignIn);
