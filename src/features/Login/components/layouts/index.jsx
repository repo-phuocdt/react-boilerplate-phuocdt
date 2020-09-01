import React from 'react';
import './layout.scss';

function LayoutLogin(props) {
  return (
    <div className="container-login">
      { props.children }
    </div>
  );
}

export default LayoutLogin;
