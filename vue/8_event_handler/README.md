# [TIL] Vue_이벤트 핸들링
`v-on`디렉티브 또는 축약형 `@`를 통해서 이벤트를 동작할 수 있도록 만든다.

<br />

## 이벤트 작성방법

<br>

> `v-on:이벤트=""` 또는  
> `@이벤트=""` 축약해서 으로 작성

<br />
<br />

## 이벤트 종류

이벤트명      |  설명
:------------:|:-------------------------:
click | 마우스를 클릭했을 때 실행
dblclick | 마우스를 더블 클릭했을 때 실행
mouseover | 마우스의 포인트가 <br /> 요소 위로 올라왔을 때 실행 
mouseout | 마우스의 포인트가 <br /> 요소 밖으로 벗어났을 때 실행
mousemove | 마우스의 포인트가 이동했을 때 실행
mousedown | 마우스의 버튼을 눌렀을 때 실행 
mouseup | 마우스의 버튼을 놓았을 때 실행
keydown | 키보드의 키를 눌렀을 때 실행 
keyup  | 키보드의 키를 놓았을 때 실행 
keypress | 키보드의 키를 눌렀다가 놓았을 때 실행
change | 요소값이 변경되면 실행 <br /> 값이 입력되는 도중에는 실행되지 않는다.
submit | `<Form>`이 제출될 때 실행 
reset  | `<Form>`이 재설정될 때 실행 
select | `<select>`의 값이 선택되었을 때 실행
focus | 태그에 포커스가 있을 때 실행
blur | 태그에 포커스를 잃었을 때 실행
wheel | 마우스 휠을 굴렸을 때 실행
input | input창에 데이터 값이 입력되기 시작할 때 발생

<br />

```vue

```

<br />
<br />

## 메소드 이벤트 핸들러
- 이벤트 핸들링에 직접 로직을 작성하면 나중에 로직이 길어지고, 복잡해질 때  
코드 효율성이 많이 떨어지게 된다.  
  → 그래서 methods 속성에다 이벤트가 동작될 때 실행코드가 실행될 수 있게 핸들러를 작성하고 해당 핸들러 이름만 가져와서 동작시킨다.  
- 인수가 있을 경우 ()안에 추가 작성, 필요 없을 경우 생략 가능!  
  → 인수와 이벤트 객체 둘다 필요할 경우 `handler(para, $event)` 사용


<br />

***[예제1] 인수없이 이벤트를 작성할 때***

```vue
<template>
  <button @click="handler">
    <span>click!</span>
  </button>
</template>

<script>
export default {
  methods: {
    handler(event) {
      console.log(event);
      console.log(event.target);    // <span>click!</span>
      console.log(event.currentTarget);   // <button><span>click!</span></button> 
      console.log(event.target.textContent);    // click!
    }
  }
}
</script>

```
→ vue에서 이벤트 핸들러를 작성할 때 별도로 인수를 작성할 필요가 없을 땐   
`@click="handler"` 이렇게 괄호를 제거하고 작성해되 된다.  
그래서 별로도 인수를 작성하지 않으면 이벤트 객체가 들어와서  
현재 클릭한 대상이 무엇인지 확인할 수 있다.

<br>

> [참고] **event.target과 event.currentTarget**  
> 
> event.target : 이벤트가 발생한 HTML요소를 반환  
>  → **화면상에서 내가 클릭한 대상**을 찾아준다.  
>
> event.currentTarget : 이벤트리스너가 이벤트를 발생시키는 HTML요소를 리턴함.  
>  → 클릭될 대상(이벤트를 연결한 대상)을 지칭하기 때문에 그 **이벤트가 작성된 요소를 찾아준다.**

<br />

***[예제2] 인수도 사용하고, 이벤트 객체도 확인하고 싶을 때***

```vue
<template>
  <button @click="handler('hello' , $event)">
    <span>click!</span>
  </button>
</template>

<script>
export default {
  methods: {
    handler(msg , event) {
      console.log(msg);     // hello
      console.log(event);   // 클릭 event객체 출력
      console.log(event.target);    // <span>click!</span>
      console.log(event.currentTarget);   // <button><span>click!</span></button> 
      console.log(event.target.textContent);    // click!
    }
  }
}
</script>
```

<br />
<br />

## 복합 이벤트 핸들러

> `@click="handlerA(), handlerB()"`

<br />

- 이벤트 핸들러 여러가지 복합 메소드를 지정할 수 있다.
- `,` 로 여러가지 복합 메소드를 나열해서 작성  
  → 작성 시, 인수가 없더라도 ()를 생략하면 정상적으로 동작하지 않음  
  (위에서 메소드 1개만 연결할 때 인수가 필요없으면 생략가능했지만,  
  2개 이상 메소드를 나열할때 반드시 `()` 소괄호를 작성해야 한다!)


<br />
<br />

## 이벤트 수식어
- 기존에 js를 작성할 때 이벤트 핸들러 내부에서 사용하던 event.preventDefault(), event.stopPropagation() 등의 보완기능을 vue에서 좀 더 간단하게 작성할 수 있도록 만든 것이다.
- `.` 을 붙여 이벤트명에 연결해서 사용한다.  
  ex) `@click.prevent=""`  
- 메소드 체이닝 방식으로 이벤트명에 이벤트 수식어를 여러개 연결해서 사용할 수 있다.

<br />

### 이벤트 수식어 종류

<br />

이벤트 수식어     |  설명
:----------------:|:-------------------------:
`.prevent` | 해당 태그의 기능을 막음 <br /> Js의 event.preventDefault()와 같다.
`.stop` | 클릭 이벤트 전파를 중단시킴 <br /> (이벤트 버블링 현상 방지역할을 함) <br /> Js의 event.stopPropagation() 와 같다.
`.capture` | 이벤트 버블링 우선 순위를 변경한다 <br /> (즉, 내부 엘리먼트를 대상으로 하는 이벤트가 <br /> 해당 엘리먼트에서 처리되기 전에 여기서 처리)
`.once` | 해당 이벤트가 발생될 때 <br /> 핸들러메서드는 단 한번만 실행시킴
`.passive` | preventDefault의 반대 이벤트수식어로 <br /> 기본이벤트를 취소할 수 없게 함 <br /> `wheel`이벤트를 사용할 때 passive를 지정해놓으면 <br /> 버벅임이 적고 동작 속도가 빨라지는 것을 볼 수 있다.
`.self` | 자신의 영역이 노출된 부분에서만 이벤트를 발생시킴, <br /> 오로지 자기 자신만 호출

*passive 수식어와 .prevent 수식어를 함께 사용 금지*

<br />

***[연습1] 자식요소를 클릭했을 때 이벤트 캡쳐링과 stop수식어를 통해 handlerA()만 동작하도록 만들기***

```vue
<template>
<!-- 
  부모영역만 클릭 하면, handlerA() 만 실행되지만,
  
  자식영역을 클릭 하면, handlerB()가 실행되고, 자식이 부모안에 존재하기 때문에 handlerA()도 실행되는 것을 볼 수 있다!.
  => 이벤트버블링 현상

  이러한 이벤트 버블링 현상을 방지하기 위해 이벤트 수식어 .stop을 사용해서 막을 수 있다.
 -->
  <div 
    class="parent"
    @click.capture.stop="handlerA()">
    <div
      class="child"
      @click.stop="handlerB()"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerA() {
      console.log('A');
    },
    handlerB() {
      console.log('B');
    }
  }
}
</script>

<style lang="scss" scoped>
.parent {
  width: 200px;
  height: 100px;
  background: royalblue;
  margin: 20px;
  padding: 10px;

  .child {
    width: 100px;
    height: 100px;
    background: orange;
  }
}
</style>
```

![image](https://user-images.githubusercontent.com/81572770/147904358-6e3334b5-2d31-4b31-b737-7b4a838b8958.png) | ![결과화면](https://user-images.githubusercontent.com/81572770/147904631-4acae50a-7e12-45ea-a422-981794e32d8a.png)

<br />

→ 원래 자식영역을 클릭하면 handlerB()가 먼저 실행되고, 그 다음에 이벤트 버블링에 의해서 handlerA()도 같이 실행되는 것을 볼 수 있다.   

하지만 부모요소에 이벤트 수식어 `capture`를 사용했을 때, 자식 요소를 클릭해보면  
이벤트 캡쳐링에 의해 부모요소의 이벤트가 먼저 실행되어  
handlerB()가 아닌 handlerA()가 먼저 실행되는 것을 볼 수 있다!

그리고 여기서 handlerA()만 실행시키고, handlerB()의 실행을 막고 싶다면 이벤트 수식어 `capture`뒤에 `stop`을 연결해서 작성하면 된다!

<br />
<br />

## 키 수식어
- 키보드 이벤트를 청취할 때 사용
- 키값에 해당하는 수식어를 별도의 이름으로 지정하여 활용

<br />

### 키 수식어 종류

- `.enter`
- `.tab`
- `.delete` : "Delete" 와 "Backspace" 키 모두 해당
- `.esc` 
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`
- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

<br />

***[예제1-1] input창에 내용을 작성하고 엔터키를 누르면 enter!!라는 실행문이 출력되도록 만들기***

```vue
<template>
  <input
    type="text"
    @keydown="handler">
  </input>
</template>

<script>
export default {
  methods: {
    handler(event) {
      if(event.key === 'Enter!!'){
        console.log('Enter!!');
      }
    }
  }
}
</script>
```
→ input창에 내용을 작성하다가 엔터키를 누르면 그때 keydown이벤트가 실행되면서, event객체의 key값과 Enter가 동일하면 console문이 출력되는 것을 볼 수 있다.

위의 코드를 키수식어를 활용해서 좀 더 간결하게 작성할 수 있다!!!

<br />

***[예제1-2] 예제1-1의 코드를 키 수식어를 활용해 좀 더 간결하게 작성하기***

```vue
<template>
  <input
    type="text"
    @keydown.enter="handler">
  </input>
</template>

<script>
export default {
  methods: {
    handler() {
      console.log('Enter!!');
    }
  }
}
</script>
```

*만약 a키를 눌렀을 때 console문이 출력되도록 만들고 싶다면  
`@keydown.a="handler"` 이렇게 작성할 수 있다!

*키 수식어를 여러개 나열해서 작성할 때  
`@keydown.ctrl.shift.a="handler"` 를 순서대로 눌러야 console문이 출력된다!