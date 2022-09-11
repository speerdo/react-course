import React from 'react';
import ReactDOM from 'react-dom';

// Higher Order Component - a component that renders another component
// lets you reuse code
// render hijacking
// prop manipulation

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is Private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
}

const requreAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please make sure you are logged in.</p>}</div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requreAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info='These are the details' />,
//   document.getElementById('app')
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info='These are the details' />,
  document.getElementById('app')
);

