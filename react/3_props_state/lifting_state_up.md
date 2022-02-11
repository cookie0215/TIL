# [TIL] React_state 끌어올리기

<br />

### state 끌어올리기 란?
- 하위 컴포넌트에서 부모컴포넌트가 갖고 있는 상태를 바꿔야 할 때,    
  state를 변경시키는 함수(handler)를 하위 컴포넌트에 props로 전달해서 해결하는 것을 말한다.

<br />
<br />

***[예제] 상태 끌어올리기***

1. Login(부모)컴포넌트와 자식 컴포넌트 LoginId, LoginPwd 컴포넌트를 만들고, 해당 state도 각 컴포넌트에서 관리하도록 작성

```jsx
// Login (부모) 컴포넌트
import React from 'react';
import LoginId from './LoginId'
import LoginPwd from './LoginPwd'

const Login = () => {
  return (
    <form>
      <LoginId />
      <br />
      <LoginPwd />
      <button disabled={true} onClick={loginClick}>Login</button>
    </form>
  );
};

export default Login;
```
```jsx
// LoginId
import React, { useState } from 'react';

const LoginId = () => {
  const [id, setId] = useState('');
  const idChange = (e) => {
    setId(e.target.value)
  }
  return (
    <>
      <label>
        ID :
        <input type="text" value={id} onChange={idChange} />
      </label>
    </>
  );
};

export default LoginId;
```
```jsx
// LoginPwd
import React, { useState } from 'react';

const LoginPwd = () => {
  const [pwd, setPwd] = useState('');
  const pwdChange = (e) => {
    setPwd(e.target.value)
  }

  return (
    <>
      <label>
        PW :
        <input type="password" value={pwd} onChange={pwdChange} />
      </label>
    </>
  );
};

export default LoginPwd;
```

<br />

2. Login (부모) 컴포넌트에 존재하는 button을 클릭 했을 때 alert창이 나타날 수 있도록 만들기


```jsx
// Login (부모) 컴포넌트
import React from 'react';
import LoginId from './LoginId'
import LoginPwd from './LoginPwd'

const Login = () => {
  const loginClick = () => {
    alert(`id: ${id}, pw: ${pwd}`);
  }

  return (
    <form>
      <LoginId />
      <br />
      <LoginPwd />
      <button disabled={true} onClick={loginClick}>Login</button>
    </form>
  );
};

export default Login;
```
→ 현재 로그인 버튼은 각 id입력창과 pwd입력창이 입력되어 있지 않은 상태이기 때문에 비활성화 상태로 처리했다.     

그럼 LoginId, LoginPwd 컴포넌트가 각각 상태를 갖고 있기 때문에 서로 입력값이 입력되어 있는지의 상태를 체크할 수 없다.     
각 input의 값이 입력되어 있는지 여부를 확인하려면 어떻게 할까?

이때 자식 컴포넌트에 작성한 state들을 부모 컴포넌트로 끌어와야 한다.

<br />

3. LoginId와 LoginPwd에 있던 state를 부모 컴포넌트로 가져와서 작성한 다음,   
LoginId와 LoginPwd 자식 컴포넌트에 props를 전달해준다.

```jsx
// Login (부모) 컴포넌트
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
```
→ 로그인 버튼이 id입력창과 pwd입력창에 값이 입력되어 있을 때만 활성화되고,    
click하면 입력한 로그인 정보가 나타나는 alert창을 볼 수 있다!
