# [TIL] Vue3_Lifecycle


### Lifecycle 이란?
- 어떤 Vue 인스턴스나 컴포넌트가 생성될 때, 미리 사전에 정의된 몇 단계의 과정  
- Vue 인스턴스는 크게 **생성(create)**되고, **DOM에 부착(mount)**되고, **업데이트(update)**되며, **없어지는(destroy)** 4가지 과정을 거친다.  
  → 이 4가지 과정을 거치는 각각의 단계마다 Hook(훅)을 사용할 수 있도록 API를 제공하고 있다!

<br>

>  HOOK(훅)의 종류
> `beforeCreate`, `created`, `beforeMount`, `mounted`,`beforeUpdate` `updated`, `beforeDestroy`, `destroyed`
    
<br>
<br>

## **Lifecycle Diagram**

![캡처](https://user-images.githubusercontent.com/81572770/147753375-d868ba6f-40d1-4d0a-b430-9b1e65350ded.JPG)

<br>

### create (초기화 단계)
: Dom이 추가되기 전 가장 먼저 실행되는 함수

<br>

1. `createApp()` 메소드를 통해 프로젝트를 시작하고, 메소드체이닝으로 연결한 `mount()`메소드를 통해 실제 html구조로 연결된다.

2. vue.js에서 사용되는 여러 event & lifecycle이 초기화 된다.

3. Vue 인스턴스가 초기화 된 직후에 `beforeCreate`라는 훅이 실행된다.  
: 아직 인스턴스의 data, event, methods등 옵션이 생성되지 않은 상태이기 때문에에 접근할 수 없는 상태여서,   
DOM에 접근하려고 한다면 에러가 발생된다.  
  
4. injections (주입) & reactivity (반응성) 이 만들어지는 단계   
: 만들어 놓은 data, 반응성 관련된 것들이 만들어 진다.  
(인스턴스 옵션에 접근할 수 있는 상태이다! 단, 아직 template의 dom에는 연결되지 않은 상태!)
    
5. `created` 훅이 실행된다.   
: data, methods, computed 등이 완성된 시점이라 접근이 가능하다. 그래서 컴포넌트 초기에 외부에서 받아온 값들을 셋팅하거나 이벤트리스너를 선언할 때 이 과정에서 진행되는 것이 적절하다! (하지만 아직 DOM에는 추가되지 않은 상태)

<br>

### mount (DOM 작성(장착) 단계)

<br>

6. vue에 작성된 옵션에 `<template>` 태그에 html태그가 등록(작성)되어 있는지 확인하는 과정을 거친다.

7. `beforeMount` 훅 실행  
: DOM에 연결되기 바로 직전에 호출되는 훅으로, 템플릿과 런데함수들이 컴파일된 이후 첫 렌더링이 발생되기 직전에 실행된다!  
(아직 dom에 접근할 수 없는 상태이며, data는 일반적으로 created훅에서 처리되기 때문에 거의 사용되지 않는 훅이다)  
    
8. 실제 html에 연결하는 과정이 진행된다.  

9. DOM에 연결이 된 직후에는 `mounted` 훅이  실행된다.  
: 가상DOM에 있던 내용들이 실제 DOM에 부착된 바로 직후이기 때문에, 이때부터 DOM에 접근할 수 있고, Ajax(fetch) 통신 처리가 가능하다.  (data, computed, methods 등 모든 요소 접근 가능)
    
<br>

### update (상태 변화로 인한 재렌더링 단계)
: data값을 변경 시, DOM에도 변경된 data를 갖고 화면에 다시 그려야 하는데 이때 호출되는 훅이 beforeUpdate와 updated 이다.

<br>

10. `beforeUpdate` 훅 실행  
: 컴포넌트 데이터가 변하면서 업데이트가 시작되기 바로 직전에 실행됨  
  관찰하고 있던 데이터가 변경되면 가상의 DOM에 변경된 부분을 다시 그리기 시작하는데 **재렌더링되기 직전에 호출되는 훅**이다.  
  여기서 값들을 추가적으로 변경하더라도 렌더링을 추가로 호출하지는 않는다!

11. `updated` 훅 실행  
: 컴포넌트 데이터가 변할 때 **재렌더링이 발생된 직후에 실행되는 훅**으로,  
  DOM이 업데이트가 완료된 상태라면 연산과 기능을 동작시킬 수 있다.  
  (가상DOM을 렌더링하고 실제 DOM이 변경된 이후에 호출되는 훅이기 때문에 만약 변경된 값들을 DOM에 접근시키고 싶다면 update훅 단계가 적절하다)  

<br>

### destroy (소멸 단계)
컴포넌트를 해체시킬 때 호출 되는 훅

<br>

12. `beforeDestroy` 훅 실행  
-
 **컴포넌트가 해체(소멸)되기 바로 직전에 호출되는 훅**으로, 주로 이벤트 리스너를 제거할 때 많이 사용된다.   
(아직 소멸되지 않은 상태이기 때문에 인스턴스는 완전하게 작동한다. 그래서 모든 속성에 접근이 가능함!)  
    
13. `destroyed`  훅 실행  
: 모든 컴포넌트가 **해체되고 난 뒤, 호출되는 훅**  
컴포넌트의 모든 리스너(이벤트 리스터, 디렉티브)가 해체되고 자식 컴포넌트까지 해체된다!  
→ 해체가 끝났기 때문에 인스턴스 속성에 접근할 수 없다!
    
<br>
<br>
<br>

## lifecycle 예제  

<br>

```javascript
<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2
    }
  },
  beforeCreate() {
    console.log('Before Created!' , this.count);  
  },

  // 컴포넌트가 생성된 직후, created 훅에 의해 해당 내용이 실행된다.
  created() {
    console.log('Created!', this.count);
  },

  beforeMount() {
    console.log('Before Mount!');
    console.log(document.querySelector('h1')); 
  },

 //  화면에 실제 데이터가 출력이 되어 count값이 브라우저에 보일 때
  mounted() {
    console.log('Mounted!');
    console.log(document.querySelector('h1'));
  },
  
}
</script>
```
<br>

작성된 메소드들은 사전에 미리 정의된 lifecycle 단계에 맞게 처리되기 때문에 작성 순서와는 상관없이 동일하게 동작한다!  

`created()` 훅 부분에선 `this.count` 가 2라고 정상적으로 출력되지만,  
`beforeCreate()` 훅 부분에 `this.count` 를 console에 찍어보면 undefined라는 값이 출력되는 것을 볼 수 있다.  

그 이유는 `beforeCreate()` 훅 부분은 해당 컴포넌트가 생성되기 직전에 실행되기 단계이기 때문에  
데이터가 아직 정의되지 않은 상태이다. 그래서 data가 아직 만들어지지 않았기 때문에 undefined가 출력되는 것이다.  

이번엔 `beforeMount()` 와 `mounted()` 를 살펴보자  

`mounted()` 훅 부분에 `console.log(document.querySelector('h1'))` 를 출력해보면 정상적으로 `<h1>2</h1>` 이 출력되는 것을 볼 수 있지만,   
`beforeMount()` 훅 부분에 `console.log(document.querySelector('h1'))` 를 출력해보면 `null` 값이 찍히는 것을 볼 수 있다.  

⇒ `mounted()` 훅은 실제 DOM에 연결된 직후 발생하기 때문에 h1태그를 찾아 정상적으로 출력을 할 수 있다 (실제 DOM에 접근 가능!)  
하지만 `beforeMount()` 훅은  DOM에 연결되기 바로 직전에 호출되는 훅이라서, 아직 DOM에 접근하지 못하는 상태이므로 null이 출력되는 것이다.  