import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Vertical from '../../styling/Vertical';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
      submit: false,
      error: false,
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onCancel = this.onCancel.bind(this);

  }

  onNext(e) {
    this.setState({ error: false, submit: true });
    e.preventDefault();
  }


  onCancel() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      submit: false,
      error: false,
    });
  }


  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      submit, error, firstName, lastName, email, phone,
    } = this.state;

    let result = null;
    if (submit && !error) {
      result = (
        <Redirect
          to={{
            pathname: '/signup/createaccount/addressinfo',
            state: {
              user: {
                firstName, lastName, email, phone,
              },
            },
          }}
        />
      );
    }

    return (
      <Vertical>
        <div className="container card w-50 shadow bg-light">
          <div className="d-flex align-items-center" style={{ height: 300 }}>
            <div className="row justify-content-center card-body">
              <form onSubmit={this.onNext}>
              {/* <form ref={this.formRef}> */}
                <div className="form-inline">
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                </div>
                <div className="form-inline">
                <button type="button" className="btn btn-secondary m-2 pl-5 pr-5" onClick={this.onCancel}>
                    Cancel
                  </button>
                  <input type="submit" value="Next" className="btn btn-primary m-2 pl-5 pr-5" />
                
                </div>
                {result}
              </form>
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default SignUp;
