# [TIL] React_Controlled & Uncontrolled Component
리액트의 기본 설계 원칙은 신뢰 가능한 단일 소스(Single Source of Truth)'로 관리하는 것이다.   
→ 자식 컴포넌트에서 data가 필요할 경우, 해당 data는 가장 가까운 공통 부모 컴포넌트에게서만 **props**의 형태로 전달받아서 사용함     
(Html 요소들은 내부적으로 데이터를 갖고 있지 않기 때문!)

input, select, textarea 등 Form요소들은 상태를 갖고 있다.   
(즉, Form요소들은 **자체적으로 data를 가지는 엘리먼트들**이다.)    
이러한 Form요소들의 상태를 관리하기 위해 `Contorlled`와 `Uncontrolled Component` 2가지 방법으로 나뉜다.

<br />

## Controlled Component
- Form요소를 갖고 있는(렌더링하는) **컴포넌트가 Form요소의 입력값을 직접 제어(관리)**하는 방식   
  → 컴포넌트의 상태나 속성(props)을 사용해 입력값을 직접 관리한다!

<br />
<br />

## Uncontrolled Component
- Form요소의 상태를 직접 관리하지 않고 엘리먼트의 참조만 컴포넌트가 소유하는 방식
  → state를 사용하지 않고 ref를 활용해 입력 폼의 상태에 접근할 수 있다!    
    (함수형 컴포넌트에선 useRef() , class컴포넌트에서는 createRef()를 사용함!)

*단, ref를 사용하면 컴포넌트 상태 값이 변할 때 리렌더링이 발생하지 않는다는 특성이 있어*   
*데이터와 UI간의 동적 처리가 발생하지 않는다는 것을 알아두자!*


<br />
<br />

리액트 공식문서에서 폼을 구현할 때 되도록 controlled component를 활용하는 것을 권장하고 있다.


기능|	비제어 컴포넌트 |	제어 컴포넌트
|:--------:|:---------:|:-------------:|
폼 제출 기능을 구현할 때 |	✅	| ✅
제출한 입력값을 검사할 때 |	✅	| ✅
입력값을 실시간으로 검사할 때 |	❌ |	✅
제출 버튼을 입력값에 따라 커스텀할 때 |	❌ |	✅
한 입력 폼에 여러 데이터를 추가할 때 |	❌ |	✅

<br />
<br />
