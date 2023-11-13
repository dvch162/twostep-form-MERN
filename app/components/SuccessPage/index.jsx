import React from 'react';
import Vertical from '../../styling/Vertical';

const SuccessPage = () => (
  <Vertical>
    <div className="container card w-50 shadow bg-light">
      <div className="d-flex align-items-center" style={{ height: 300 }}>
        <div className="row justify-content-center card-body">
          <h3>Registration successful</h3>
        </div>
      </div>
    </div>
  </Vertical>
);

export default SuccessPage;
