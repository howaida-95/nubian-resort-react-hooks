import React from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className = 'error d-flex justify-content-center align-items-center'>
      <div>
        <h1 className = 'mainHeader'>404</h1>
        <h2 className = 'secondaryHeader'>page not found</h2>
        <Link to="/" className="btn btn-primary">return home</Link>
      </div>
    </div>
  )
}
export default Error;