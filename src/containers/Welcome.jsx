import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {

  return (
    <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h3 className="text-center">Welcome</h3>
            <br />
            <Link to="/to-do">
              <a href="javascript:void(0)">To do</a>
            </Link>
            <br />
            <Link to="/dummy">
              <a href="javascript:void(0)">Dummy</a>
            </Link>
            <br />
            <Link to="/profile">
              <a href="javascript:void(0)">Profile</a>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Welcome;