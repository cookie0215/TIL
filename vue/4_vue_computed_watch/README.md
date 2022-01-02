# [TIL] Vue3_computed / watch / methods
vue에서 함수를 구현하기 위해 사용하는 속성들 이다.

<br>

## computed
- computed는 '계산된' 이라는 의미로,  
대상으로 정해진 data속성 값이 computed에 작성된(연산된) 로직에 의해   data값이 변경되었을 때, 이를 감지하고 자동으로 화면에 출력해준다.  
그리고 결과 값은 저장(캐싱)하게 된다.
 - 복잡하거나 연산이 많은 로직들을 처리할 때 많이 사용  
  → 캐싱처리(결과값을 저장해서 처리)를 하기 때문에 감지하고 있던 data속성 값이 변경되지 않았다면 저장(캐싱)하고 있던 데이터를 반환한다.  
  → 데이터를 최적화하는 용도로 사용
- Computed는 라이프 사이클에 영향을 받지 않고,   
template 내부에 선언된 computed 중에서 **해당 함수와 연결된 값이 바뀔 때만 해당 Computed가 재 연산**된다.
- 반드시 return키워드를 작성해줘야 한다.
- templage에 computed를 적용할 때 메소드처럼 만들었지만 이미 계산된 하나의 데이터이기 때문에 **호출할 때 괄호를 붙여서 사용할 필요가 없다.**
- computed는 **기본적으로 Getter를 방식을 사용**하며,   
  computed로 계산되어 반환된 결과값을 바꿔서 사용하고 싶을 땐 Setter를 설정해서 사용한다.

<br>

```javascript
<template>
  <div>
    <h1>{{ reversedMsg }}</h1>
    <h1>{{ reversedMsg }}</h1>
    <h1>{{ reversedMsg }}</h1>
    <h1>{{ reversedMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed!'
    }
  },
  computed: {
    reversedMsg() {
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    reverseMsg() {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>
```
→ 똑같은 로직은 반복 출력할 때 computed로 미리 계산된 로직은 한번만 실행하면 그 결과값을 어딘가에 저장(캐싱)해 놓는다.  
  그래서 첫번째 h1에서 연산 처리가 완료되면 나머지 2~4번째 h1은 computed에서 캐싱된 결과 자체만 가져와서 화면에 출력해준다.   
  => 즉. computed에 만든 로직은 연산이 1번만 처리가 되면 나머지 곳에서 똑같은 값을 반환하고 싶을 때 다시 연산해줄 필요 없이  
  맨 처음에 처리되었던 연산 결과를 가져와 그대로 화면에 뿌려주는 것이다!  

<br>
<br>

## watch
- 특정 데이터의 변화를 감지하여 자동으로 특정 로직을 수행하는 속성

<br>
<br>

## methods
- 일반적으로 함수를 정의할때 사용하는데, Computed 와 호출되는 조건이 다르다.
- Methods는 라이프 사이클에 영향을 받는다.  
template 내부에 선언된 methods 중에서 update 라이프사이클이 동작한(= 아무 변수나 변경될 때)다면 함수를 모두 실행함
- Methods는 종속된 값이란 개념없이 **렌더링이 일어날 때마다 계속 호출**
(computed는 종속된 값에 의존하고, 반환된 결과를 캐싱(저장)하기 때문에 렌더링이 발생할 때마다 호출되는 것이 아니라 값이 바뀔때만 호출한다!)

<br>
