# [TIL] Vue_조건부 렌더링
조건에 따라 true값을 반환하면 렌더링되며,   
`v-if`와 `v-show`가 있다.

<br />

## `v-if`
- v-if는 조건을 만족(true값일 때)하면 렌더링을 하고  
  조건에 만족하지 않으면 DOM 레벨뿐만 아니라 모든 감시 (watch 등..)도 제거된다.  
  → 즉, `v-if`는 dom자체를 생성하지 않기 때문에 false값으로 처리되면 화면에 보여지지 않는다.

<br />

> [참고] **v-if < display < visiblity < opacity**    
> `v-if`는 dom자체를 생성하지 않기 때문에 false값으로 처리하면 화면에 보여지지 않는다.  
> `display: none`은 dom과 cssom은 생성되나 렌더트리에 걸리지 않아 안보이게 처리된다.  
> `visiblity` 는 dom/cssom/rendertree에 걸리는데 그 영역을 투명으로 처리하기 때문에 영역은 존재하나, 눈에는 안보이게 처리할 수 있다.

<br />

- 자바스크립트에서 `if - else if - else`문을 사용하듯이 vue에서도 `v-if`에 `v-else-if` 또는 `v-else`를 추가할 수 있다.

<br />

***[예제1] 버튼 클릭에 따라, 데이터가 true를 반환하면 'hello'를 false를 반환하면 'good bye'를 출력하기***

```vue
<template>
  <div>
    <button @click="active">버튼 클릭</button>
    <h1>버튼을 클릭하면 어떻게 될까?</h1>
    <p v-if="isShow">hello</p>
    <p v-else>good bye</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    active() {
      this.isShow = !this.isShow
    }
  }
}
</script>
```
→ 버튼 클릭 전, 현재 isShow 데이터 값이 false이기 때문에 화면에 'good bye'가 나타나 있다.  
여기서 버튼을 1번 클릭하면 isShow 데이터 값이 true로 바뀌면서 화면에 'hello'가 나타나고,  
다시 버튼을 클릭해보면 isShow 데이터 값이 true에서 false로 다시 바뀌면서 화면에 'good bye'가 나타나  
마치 toggle버튼처럼 동작하게 된다!

<br />
<br />

### template 에 `v-if` 작성
- `<template>`태그로 여러개의 tag를 묶어 v-if를 적용하고 싶을때 사용할 수 있다.
- `<template>` 엘리먼트는 눈에 보이지 않게 내부 엘리먼트를 감싸는 역할(invisible wrapper)을 하기 때문에,   
  최종 렌더링 결과에 포함되지 않는다.  
  → 즉, 개발자 도구에서 html 구조를 보면 `<template>` 는 보이지 않는 것을 확인할 수 있다.
- **최상위 `<template>` 에는 v-if를 사용할 수 없다!!**

<br />

***[예제1] 1개의 h1태그와 2개의 p태그를 화면에 동시에 보이거나 보이지 않게 처리하기***

```vue
<template>
  <div>
    <button @click="handler">Click me!</button>
    <template v-if="isShow">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
    }
  }
}
</script>
```
버튼 클릭 전 (if값: false)  |  버튼 클릭 후 (if값: true)
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/81572770/147874736-dcfb1cde-005a-4eea-badf-2d4a0faa8788.png) | ![image](https://user-images.githubusercontent.com/81572770/147874782-b7932bc9-7a30-4a3e-b3a1-422f95c777c4.png)

<br>

→ 여기서 버튼을 클릭하면 Title과 Paragraph 1, 2 텍스트가 보였다 안보였다 처리할 수 있다.  
이때 개발자 도구를 확인해보면 `<template>`태그는 렌더링 되지 않았음을 볼 수 있고,  
또 v-if문은 dom자체를 생성하지 않기 때문에 false값으로 반환되면 해당 부분이  
[개발자도구] - [element탭] 에 주석으로 나타나는 것을 볼 수 있다! 


<br />
<br />

## `v-show`
- `v-if`처럼 조건이 true값을 반환하면 렌더링 된다.  
하지만 둘의 차이점은 `v-if`는 DOM을 만들어 내지 않기 때문에 false값을 반환한다면 아예 해당 코드는 개발자도구에서 볼 수 없다.   
반면 `v-show`는 DOM을 생성하지만, `display:none`처럼 안보이게 처리되기 때문에, false값을 반환할 때 개발자도구에서 해당 코드를 확인할 수 있고, 그 코드에 `display:none`이 인라인 속성으로 작성된 것을 볼 수 있다.
- `v-show`는 `v-if`처럼 `<template>`안에 사용하면 안된다.  
  → `v-show`는 DOM을 만들기 때문에 template태그 속성에 작성하면 template태그가 element탭에 나타나게 되어 에러가 발생한다!

<br />