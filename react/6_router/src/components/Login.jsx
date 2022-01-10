import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function login() {
    setTimeout(() => {
      // 로그인 페이지에서 홈화면으로 이동
      navigate('/');
    }, 1000)
  }

  return (
    <div>
      <h2>로그인페이지 입니다.</h2>
      <button onClick={login}>로그인</button>
    </div>
  )
}