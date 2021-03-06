# [TIL] Vue_component

### component (컴포넌트)
- 화면을 구성할 수 있는 블록을 의미
- 한번 작성한 컴포넌트는 다른곳에서 여러번 사용할 수 있어 재사용성이 좋다.
- 단위 테스트가 용이함

<br />
<br />

## component 등록

### 1. 전역 컴포넌트 등록

- 모든 범위의 여러 인스턴스에서 공통으로 사용 가능  
  → 전역 컴포넌트로 등록한 컴포넌트는 모든 자식 컴포넌트에서 사용이 가능

<br />

***전역 컴포넌트 등록 형식***  

```vue
// App.vue 파일 (부모 컴포넌트파일)

Vue.component('컴포넌트 이름', {
    template: `
        // 컴포넌트 내용
    `,
    data() {
        return {
          // 데이터 값
        }
    }
});
```

<br />

→ 여기서 전역 컴포넌트로 형태로 작성한 뒤, 해당 컴포넌트의 이름을 html에 추가하면  
최종적으로 컴포넌트가 등록된다.

<br />
<br />

### 2. 지역 컴포넌트 등록
- 내가 어디에 위치해야할 지를 지정해준 컴포넌트로, 그 지정된 곳에서만 사용할 수 있다.
- 자식 컴포넌트에서 자동으로 사용이 불가하고, 만약 사용하고 싶다면 다시 자식 컴포넌트에서 불러와 사용해야 한다.
- 인스턴스에 components 속성을 추가하고 등록할 컴포넌트 이름과 내용을 정의하면 된다.  

*컴포넌트 이름과 컴포넌트 내용이 똑같다면 축약해서 작성할 수 있다!*

<br />

***지역 컴포넌트 등록 형식***  

 ```vue
 // App.vue 파일 (부모 컴포넌트파일)
 
 new Vue({
    components: {
        '컴포넌트 이름': 컴포넌트 내용
    }
 });
 ```

<br />

***모듈 시스템에서 지역 컴포넌트 등록 형식***

```vue
// App.vue (부모 컴포넌트)

import 컴포넌트이름 from 컴포넌트경로

export defalut {
  components: { 
    '컴포넌트 이름': 컴포넌트 내용
  }
}
```

<br />
<br />

## componet 옵션 요소

### `data`
- 컴포넌트가 바라보는 data 객체를 function형태로 지정하고,  
return키워드로 데이터를 반환

<br />

### `template`
- 해당 컴포넌트의 DOM형태를 구성
- dom을 작성할 때 ` `` `백틱 기호로 감싸서 문자열 리터럴로 작성한다.

<br />

### `props`
-  **App.vue(부모 컴포넌트)에서 자식 컴포넌트에게 값을 전달하기 위해**  
자식컴포넌트에 props 배열 또는 객체를 지정해 사용  
→ 즉, props는 부모 컴포넌트와 자식 컴포넌트 간의 데이터 통신 방법이다!  

*최상위 컴포넌트에서 최하위 컴포넌트에게 정보를 전달하는 것은 사실 비효율적이다..!*   
*=> 그래서 provide와 inject개념이 나타나게 되었다.*

<br />

> < props 표기법 >  
> 
> vue에서는 camelCase 표기법을 kebal-case 표기법으로 자동 변환되는 특성을 갖고 있다!  
> 그래서 vue파일 html을 표현할 때는 주로 kebal-case로 표현하고,  
> js에서 prop를 받아서 사용할때는 camelCase를 사용한다.

<br />

### `events($emit)`
- **자식컴포넌트에서 App.vue(부모 컴포넌트)로 값을 전달할 때 사용** 

<br />

### `methods`
- 자식 컴포넌트에서 부모 컴포넌트로 이벤트 함수로 값을 넘길때 주로 사용함

