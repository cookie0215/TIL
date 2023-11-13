import React from 'react';

const LoginId = ({ idChange }) => {
  return (
    <>
      <label>
        ID :
        <input type="text" onChange={idChange} />
      </label>
    </>
  );
};

export default LoginId;