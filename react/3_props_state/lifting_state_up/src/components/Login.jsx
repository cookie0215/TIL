import React, { useState } from 'react';
import LoginId from './LoginId'
import LoginPwd from './LoginPwd'

const Login = () => {
  const [id, setId] = useState('');
  const idChange = (e) => {
    setId(e.target.value)
    console.log(e.target.value.length > 0)
  }

  const [pwd, setPwd] = useState('');
  const pwdChange = (e) => {
    setPwd(e.target.value)
    console.log(e.target.value.length > 0)
  }

  const loginClick = () => {
    alert(`id: ${id}, pw: ${pwd}`);
  }

  console.log(id.length)

  return (
    <div>
      <LoginId idChange={idChange} />
      <br />
      <LoginPwd pwdChange={pwdChange} />
      <button disabled={id.length === 0 || pwd.length === 0} onClick={loginClick}>Login</button>
    </div>
  );
};

export default Login;