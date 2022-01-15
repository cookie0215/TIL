# [TIL] Vue3_템플릿 문법


### 템플릿문법이란?
- Vue의 Template (템플릿) : Html, Css 의 마크업 속성과 **vue 인스턴스에서 정의한 데이터 및 로직들을 연결해 브라우저 화면에서 볼 수 있도록 html로 변환해주는 것**을 말한다.  
- Template Syntax (템플릿 문법) : vue로 화면을 조작하는 방법이고, 템플릿 문법은 크게 **데이터 바인딩**과 **디렉티브**로 구분한다.

<br>

## 1. **데이터 바인딩**
- vue 인스턴스에서 정의한 속성들을 화면에 표시하는 방법
- 가장 기본 형태 : 콧수염 형태로 이루어진 Mustache (이중 괄호 구문)을 사용한 문자열 보간법(text interpolation)이다.  
  → ex) `<h1>{{ msg }}</h1>`

<br>

## 2. **디렉티브**
- vue의 화면 요소를 더 쉽게 조작하도록 사용하는 문법으로, html 태그의 속성에 콧수염 형태인 Mustache (이중 괄호 구문)을 사용할 수 없기 때문에 html태그 속성에 작성할 때는 `v-`인 **디렉티브** 형태를 사용해야 한다.

<br>

### `v-bind`

<br>

> < 작성 방법 >  
> `v-bind:속성명=""` 또는  
> `:속성명=""` 축약해서 으로 작성

<br>

- html 태그가 갖고 있는 기본 속성과 **vue의 data 속성을 연결할 때 사용**하는 디렉티브

<br>
<br>


### `v-on`

<br>

> < 작성 방법 >  
> `v-on:이벤트=""` 또는  
> `@이벤트=""` 축약해서 으로 작성

<br>

- 화면 요소의 이벤트를 감지하고 동작시킬 때 사용
- v-on 디렉티브에 직접 이벤트핸들러 로직을 작성하면 코드가 복잡해질 때,   
  코드가 지저분해지고 또한 유지보수 측면해서도 좋지 않은 코드가 된다.
  → 그래서 methods 속성부분에 이벤트 핸들러함수를 작성하고,   
  template에는 지정한 이벤트핸들러이름만 가져와서 동작할 수 있도록 만드는 것이 효율적이다!

<br>
<br>

***동적 전달인자***  
위의 각 디렉티브의 전달인자를 작성할 때 vue의 data속성 부분에 전달할 속성을 작성하고 그 data를 html속성부분으로 가져와 대괄호로 묶어서 작성할 수도 있다.  

<br>

```javascript
// App.vue

<template>
  <h1
    v-bind:[attr]="className"
    @[event]="addBang('bye')">
      {{msg}}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue~',
      className: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    addBang(ment) {
      this.msg += ment + '!';
    }
  }
}
</script>
```
![결과 화면](https://user-images.githubusercontent.com/81572770/147817775-24691cd5-5bdc-4d53-951e-65936de506b8.JPG)

→ h1태그에 class명을 active라고 지정해주기 위해  
  `v-bind:class="className"` 이렇게 작성했었는데  
  이걸 `v-bind:[attr]="className"` 동적 전달인자형태로 작성했다.  

  그래서 `[attr]` 은 data속성에서 `class`라는 문자를 가져와 넣고, 속성값으로 `className` 이라고 작성해서 `active` 문자를 전달해 원하는대로 동작하고 있는 것을 볼 수 있다!

<br />
<br />

### `v-model`

<br />

> < 작성 방법 >  
> `v-model=""`  

<br />

- v-model 속성은 `v-bind`와 `v-on`의 기능의 조합으로 동작   
  → 양방향 데이터 바인딩으로 주로 form태그에 연결되어 동작한다!
- 영어 외에, 한국어, 중국어, 일본어 등은 데이터가 변경될 때 한글자씩 느리게 반응하는 문제가 있어서  
  vue공식문서에서도 되도록 `v-bind`와 `v-on`을 사용해서 처리하도록 권고하고 있다.

<br />

```vue
<template>
<input 
  type="text"
  v-model="addItemText"/>
</template>

<script>
export default {
  data() {
    return {
      addItemText: ''
    }
  }
}
</script>
```
→ input창에 내용을 입력하면 [개발자도구] - [vue]에 <root> 태그가 나타난다.   
  <root> 태그 등을 하나씩 눌러보면 하단에 data관련 정보가 나타나고,
  input창에 입력된 내용이 있을 때마다 addItemText의 data가 자동으로 입력내용이 나타나는 것을 볼 수 있다.