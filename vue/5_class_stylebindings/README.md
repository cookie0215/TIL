# [TIL] Vue_class binding & style binding
vue에서 데이터를 HTML 속성에 바인딩할 때 `v-bind` 사용했는데,
`v-bind`을 이용해서 해당 태그에 원하는 class명과 스타일을 적용할 수 있다.

<br>

## Class Binding

<br>

> v-bind:class="클래스명"  
> v-bind:class="{ 클래스명: 조건 }"

<br>

- class명을 동적으로 toggle할 때 사용 가능
- `v-bind:class`는 문자열, 배열, 객체를 전달 받을 수 있다.
  만약 객체를 받은 경우, 클래스명은 객체의 속성 키에, 해당 클래스가 적용되야 하는 조건이 속성 값으로 들어간다.
- `v-bind:class` 의 객체에 여러 key, value를 적용할 수 있는데  
  이렇게 되면 코드가 복잡해질 수 있기 때문에 객체형태대신 data 나 computed property(속성)을 활용해 작성할 수도 있다. 

<br>

```javascript
<template>
  <div 
    :class="{ active: isActive, 'text-danger': hasError }" >
  </div>
</template>
```
위의 코드를 아래와 같이 작성할 수 있다.

```javascript
<template>
  <div 
    :class="objClass" >
  </div>
</template>

<script>
  data() {
    return {
      objClass: {
        active: true,
        'text-danger': false
      }
    }
  }
</script>
```

<br>
<br>

## Style Binding

<br>

>  v-bind:style="{ 스타일명: 스타일값, 스타일명: 스타일값 }"  

<br>

- html에서 인라인 스타일 속성을 작성하듯이 vue에서도 이렇게 작성해서 스타일을 지정할 수 있다.
- `v-bind:style`도 코드를 좀 더 깔끔하게 만들기 위해서 data에 스타일 객체를 만들어 적용하는 것이 좋다.
- 여러개의 스타일 객체 데이터를 사용할 때는 배열형태로 작성한다!

<br>

***[예제1-1] 스타일 바인딩으로 작성하기***
```javascript
<template>
  <div :style="{color: color, fontWeight: fontWeight}" ></div>
</template>

<script>
  data() {
    return {
      color: 'blue',
      'fontWeight': 'bold'
    }
  }
</script>
```
→ 여기서 `:style="{color: color, fontWeight: fontWeight}"`   
이부분을 `:style="{color, fontWeight}"` 이렇게 작성할 수 있다!  
(key와 value가 동일하기 때문에 축약해서 사용 가능!)

<br>

***[예제1-2] 예제1-1을 data에 스타일 객체로 만들어서 작성하기***

```javascript
<template>
  <div :style="objStyle" ></div>
</template>

<script>
export default {
  data() {
    return {
      objStyle: {
        color: 'blue',
        'fontWeight': 'bold'
      }
    }
  }
}
</script>
```

<br>

***[예제2] 2개의 스타일 객체 데이터를 연결하고 싶을 땐?***
→ data에 있는 2개의 스타일 객체를 배열 형태로 작성할 수 있다.

```javascript
<template>
  <div
    :style="[fontStyle, backgroundStyle]"
    @click="changeColor">
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontStyle: {
        color: 'gold',
        'fontSize': '30px'
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    }
  },
  methods: {
    changeColor() {
      this.fontStyle.color = 'red'
    }
  }
}
</script>
```
