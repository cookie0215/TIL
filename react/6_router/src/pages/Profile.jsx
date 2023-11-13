import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    // 현재 페이지에서 바로 이전 페이지로 이동
    navigate(-1);
  }

  const goAbout = () => {
    // about페이지로 이동
    navigate('/about');
  }
  return (<div>
    <h2>Profile 페이지{id} 입니다.</h2>
    <button onClick={goBack}>뒤로가기</button>
    <button onClick={goAbout}>About페이지로</button>
  </div>)
}