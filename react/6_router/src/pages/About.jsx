import { useLocation } from 'react-router-dom';

export default function About() {
  const { search } = useLocation();
  const detail = search === '?detail=true';
  console.log(search);
  console.log(detail);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {detail && <p>해당 경로로 들어오면 보이는 텍스트입니다</p>}
    </div>
  );
}