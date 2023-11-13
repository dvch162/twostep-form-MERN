import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Vertical from '../../styling/Vertical';

class AddressInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      zipCode: '',
      submit: false,
      error: false,
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.onSubmitAddress = this.onSubmitAddress.bind(this);
  }

  onSubmitAddress(e) {
    const { address, zipCode } = this.state;
    const { user } = this.props.location.state;

    if (!address || !zipCode) {
      this.setState({ error: true });
    } else {
     
      this.setState({ submit: true });
    }

    e.preventDefault();
  }

  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { submit, error } = this.state;
    const { user } = this.props.location.state;

    let result = null;
    if (!submit && error) {
      result = <p className="font-weight-light text-danger">{'Address and Zip Code are required. Please fill in the details.'}</p>;
    }

    return (
      <Vertical>
        <div className="container card w-50 shadow bg-light">
          <div className="d-flex align-items-center" style={{ height: 300 }}>
            <div className="row justify-content-center card-body">
              <form onSubmit={this.onSubmitAddress}>
                <h4>{`${user.firstName}, please provide your address details:`}</h4>
                <div className="form-inline">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    name="zipCode"
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input type="submit" value="Next" className="btn btn-primary m-2 pl-5 pr-5" />
                </div>
                {result}
              </form>
              {submit && (
                <Redirect
                  to={{
                    pathname: '/success',
                    state: { email: user.email },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default AddressInfo;
