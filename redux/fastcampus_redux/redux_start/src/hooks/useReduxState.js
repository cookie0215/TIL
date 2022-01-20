import { useContext, useEffect, useState } from 'react';
import ReduxContext from '../contexts/ReduxContext';

// useReduxState 라는 이름의 커스텀 hook을 만들어서 따로 빼기
export default function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    })
    return () => {
      unsubscribe();
    }
  }, [store]);

  return state;
}