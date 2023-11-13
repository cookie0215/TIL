import React from 'react';

const LoginPwd = ({ pwdChange }) => {
  return (
    <>
      <label>
        PW :
        <input type="password" onChange={pwdChange} />
      </label>
    </>
  );
};

export default LoginPwd;