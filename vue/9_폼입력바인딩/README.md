# [TIL] Vue_Form Binding
이전에 `v-bind:`를 이용해서 data를 가져와 화면에 출력해주었다.  
하지만 이 방법은 단뱡항 데이터 바인딩으로, data를 가져오는 것밖에 하지 못하고, template태그안의 값이 수정되더라도 data값은 변경되지 못한다.

<br>
<br>

***[예제1-1] v-bind를 사용해서 단방향 데이터 바인딩 연결을 만들어보자***

```vue
<template>
  <div>
    <h1>{{message}}</h1>
    <input 
      type="text"
      :value="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World~'
    }
  }
}
</script>
```
→ data에서 msg를 전달 받아 h1과 input의 value값에 출력될 수 있도록 만들었다.   
일방적으로 데이터를 전달 받고만 있기 때문에 단방향 데이터 바인딩 연결이라고 할 수 있다!

단방향 연결이기 때문에 input의 value값을 내가 직접 'Hello Vue~'라고 바꾸더라도   
data의 msg는 변경되지 않고 그대로 'Hello World~' 값을 가진다.

<br />
<br />

***[예제1-2] 예제1-1을 바탕으로 @input에 handler를 연결해서 input값이 변경되면 h1의 데이터값도 변경될 수 있도록 양방향 데이터 바인딩 만들어보자***

```vue
<template>
  <div>
    <h1>{{message}}</h1>
    <input 
      type="text"
      :value="message"
      @input="handler" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'Hello World~'
    }
  },
  methods: {
    handler(event) {
      this.message = event.target.value;
    }
  }
}
</script>
```
<br />

> `@input`  
> : input창에 어떠한 값이 입력되기 시작할 때 발생하는 이벤트

→ input창에 어떠한 데이터값이 입력될 때 handler가 실행된다.  
이 handler는 input창에 입력된 값이 기존의 message값에 할당하도록 만들었다.

그래서 h1의 기존 message내역('Hello World~')이 내가 input창에 입력한 내용과 동일하게 실시간으로 변경되는 것을 볼 수 있다!

<br />
<br />

## `v-model`
- v-model 속성은 `v-bind`와 `v-on`의 기능의 조합으로 동작   
  → 양방향 데이터 바인딩으로 연결되어 동작한다!
- 영어외에, 한국어, 중국어, 일본어 등은 데이터가 변경될 때 한글자씩 느리게 반응하는 문제가 있어서  
  vue공식문서에서도 되도록 `v-bind`와 `v-on`을 사용해서 처리하도록 권고하고 있다.

<br />

### HTML 입력 요소의 종류에 따라 다른 v-model 속성  
(1) input 태그에는 value / input  
(2) checkbox 태그에는 checked / change  
(3) select 태그에는 value / change  

<br />
<br />

***[예제2] 예제1-2에서 만든 양방향 데이터 바인딩을 v-model을 활용해 좀 더 간단하게 만들어보자***

```vue
<template>
  <div>
    <h1>{{message}}</h1>
    <input 
      type="text"
      v-model="message" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'Hello World~'
    }
  }
}
</script>
```

<br />

***[예제3] checkbox에 v-model 속성을 활용하기***

```vue
<template>
<!-- 
  input 요소의 value값이 변하면 h1의 내용도 input의 value값으로
  동일하게 변경될 수 있도록 양방향 데이터 바인딩 만들기
-->
  <div>
    <h1>{{ checked }}</h1>
    <input
      type="checkbox"
      v-model="checked" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      checked: false
    }
  }
}
</script>
```
→ 처음 화면을 새로고침했을 땐 checkbox값이 false이기 때문에 check가 안된 상태로 되어 있고,  
h1태그에도 값이 false가 반환되는 것을 볼 수 있다.  
하지만 checkbox를 클릭해서 check가 된 상태로 만들면 양방향 데이터 바인딩 연결에 의해서  
h1에 작성된 값도 true로 자동 변경되는 것을 볼 수 있다!

<br />
<br />

## v-model 수식어

### `.lazy`
- `v-model.lazy`는 `@change` 이벤트 역할을 수행한다.  
  → `@change`이벤트는 값이 입력되는 도중에는 실행되지 않고, **값이 바뀌고 나서 데이터가 갱신**된다.  
  즉, 입력하는 동안에는 값이 갱신되지 않고, 입력이 완료되면 값이 갱신되는데 이 역할을 `v-model.lazy`가 대신할 수 있다.


<br />
<br />

### `.number`
- data값이 number타입인데, input값에 데이터를 입력하게되면 기본적으로 **string타입으로 반환되어 출력**된다.  
그렇기 때문에 해당 데이터값을 number로 형변환되길 원한다면,  
`v-model.number`라고 수식어를 작성해주면 된다!  

<br />
<br />

### `.trim`
- input창에 입력된 값 앞, 뒤로 스페이스바를 누르면 공백이 생성되는데,  
이러한 **string에 공백이 생기지 않도록 방지하기 위해 사용**되는 수식어이다!