# [TIL] React_Lifecycle

<br />

### LifeCycle
- Lifecycle(생명주기)은 크게 3가지 유형으로 나눌 수 있다.       
  - Mount : DOM이 생성되고 브라우저상에 나타날 때
  - Update (업데이트할 때의 상황)
    - Props가 바뀔 때
    - state가 바뀔 때
    - 부모 컴포넌트가 리렌더링 될 때
    - this.forceUpdate로 강제로 렌더링을 할 때이다.
  - Unmount : DOM이 제거될 때 == 화면에 사라질 때  
  
<br />
<br />

## LifeCycle API
라이프사이클마다 각 상황에서 호출되는 메서드들이 존재한다.

<br />
<br />

크게 Render 단계 , commit 단계 , cleanup 단계로 구분

Render 단계 : Mount와 Updating이 발생
Commit 단계 : DOM이 업데이트 된 후, 실행되는 단계


<br />
<br />

### Mount

1. `constructor()`
- 페이지가 로드 되고 컴포넌트가 처음 만들어질때 실행할 코드들을 작성한다.  
  → 즉, 생성자함수인 constructor()는 class 컴포넌트를 생성할 때 가장 먼저 실행되는 함수로, 초기 state를 설정할 때 사용 

*HOOK에서는 useState()훅을 사용하면 state의 상태를 쉽게 설정할 수 있다!* 

```javascript
//Class 컴포넌트
class LifeCycle extends Component {
  constructor(props) {
    super(props);
  }

//함수컴포넌트에서 useState() Hooks 사용
Const LifeCycle =() => {
	const [count, setCount] = useState(0);
}
```

<br />

2. `static getDerivedStateFromProps(nextProps, prevState)`
- props 로 받아온 것을 state 에 넣어주고 싶을 때 사용
- 리턴타입으로 Javascript Object를 주어야 한다. 리턴된 Object는 State에 반영된다.
- 생명주기 메서드와는 달리 앞에 static 을 필요로 하고, **이 안에서는 `this`롤 조회 할 수 없다**

<br />

3. `render()`
- React Component라면 필수로 가지고 있는 메서드로,  
  컴포넌트를 렌더링할 때 필요한 메서드이다!
- 컴포넌트의 props, state를 변경하지 않아야 하며, 호출될 때마다 같은 결과를 반환해야 한다는 특징이 있다.
- 함수 컴포넌트내에선 render()를 사용하지 않고 컴포넌트를 렌더링할 수 있다!

4. `componentDidMount()`
- 컴포넌트의 첫 번째 렌더링이 끝난 직후에 호출되는 메서드  
  → 컴포넌트가 DOM에 추가 된 후 실행되기 때문에, 이 메서드가 호출되는 시점에  
    화면에 내가 만든 컴포넌트를 보여준다.
- DOM과 상호작용 가능(읽거나 직접 변경 가능),   
  서드파티 라이브러리들을 사용하는 코드들을 여기서 작성한다.

<br />

> 🖐 참고!  
> 
>  `componentWillMount`  
> componentWillMount는 render가 되기 직전에 호출되는 API 로,   
> 브라우저가 아닌 환경에서도 호출하는 용도로 사용했으나 ,    
> componentDidMount에서 처리할 수 있다! (그냥 과거엔...이런게...있었다는것만 알아두기!)

<br />
<br />

### Update

1. `static getDerivedStateFromProps`
- Mount단계에서 발생했던 것처럼 update할 때 또 호출된다!

2. `shouldComponentUpdate`
- 리턴타입으로 True, False를 주어야 한다.
- 리턴 되는 결과에 따라 **DOM에 리 렌더링을 여부를 결정**한다.
- props 또는 state가 새로운 값으로 갱신되어 렌더링이 발생하기 직전에 호출된다!
- 성능개선하기 위해 사용이 가능하다 한다.
- 리액트 공식 홈 기준, `shouldComponentUpdate` 메서드 대신 `PureComponent`를 사용하는 것이 좋다고 한다.

3. `render()`
- 역시 Mount단계 와 동일하다.

4. `getSnapshotBeforeUpdate`
- **render 메서드 호출 후 브라우저에 나타나기 바로 직전에 호출되는 메서드**
- Virtual DOM이 실제 DOM에 반영되기 직전에 실행되는 것으로, 이전과 현재의 props와 state를 접근할 수 있다.
- 화면에 렌더링하기 전에 DOM함수를 return시켜, return으로 넘겨진 값을 componentDidUpdate의 3번째 인자로 전달 받을 수 있다.

5. `componentDidUpdate`
- Mount와 거의 동일하며, **리렌더링을 완료한 후 실행되는 메서드**이다. 
- 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출된다.
- 컴포넌트가 업데이트 되었을 시에 DOM을 조작하기 위해 사용하거나  
  이전과 현재의 props를 비교하여 네트워크 요청을 보내는 작업을 할 때 유용함

<br />

```javascript
  // 아직 렌더링되기 전이기 때문에 nextProps, nextState를 확인한다.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);

    // return값이 true면 DOM이 리렌더링되고, false면 리렌더링이 발생되지 않는다. 조건식으로 만들어 관리하면 좋다.
    return;
  }

  // 렌더링이 완료된 후 실행되기 때문에 prevProps, prevState를 확인한다!
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
```

<br />

### Unmount

 `componentWillUnMount`
- **DOM에서 컴포넌트가 지워지기 직전에 실행**되는 메서드
- 컴포넌트와 관련된것들을 정리하는데 사용한다.   
  ex) 로그아웃시 주 구성 Component를 해제하기 전에 사용자 세부정보와 모든 인증 토큰을 지운다거나 setInterval을 clear한다거나 할 수 있다.

<br />

### 컴포넌트 에러 발생 시

`componentDidCatch`
- render 함수에서 에러가 날 때,  
  사용자한테는 에러 페이지를 띄우고 뒷단에서는 에러 내용을 서버에 보내는 작업