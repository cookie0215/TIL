# [TIL] Vue_속성 상속

<br />

### 속성상속
부모 컴포넌트의 html 요소에 속성으로 값을 입력한 경우,   
자식 컴포넌트의 root요소에 클래스에 상속이 된다. 이러한 개념을 속성 상속 이라한다.


<br />

***[예제1] 자식컴포넌트에 있는 btn요소에 부모컴포넌트에서 설정한 heropy 클래스명을 상속하기!***

```vue
// App.vue (부모 컴포넌트)

<template>
  <div>
    <MyBtn class="heropy">Banana</MyBtn>
  </div>
</template>

```
```vue
// 자식 컴포넌트

<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

```

<br />

→ 개발자 도구에서 보면 btn요소에 부모컴포넌트에서 전달한 heropy라는 class명이 붙는 것을 볼 수 있다.  
(template 바로 직계자식으로 존재하는 요소가 최상위 (root)요소이다!)

<br />
<br />

### 유의할 점
- 만약 자식 컴포넌트 template안에 **최상위 요소가 2개 이상**일 때, 부모 컴포넌트에 입력한 속성값이 어느 부분에 상속되어야 하는지 판단하지 못해서 **두 최상위 요소에 모두 상속되지 않는다.**  
→ 그래서 개발자도구에서 보면 heropy라는 클래스명이 어느 요소에도 붙어 있지 않음을 볼 수 있다.

<br />
<br />

## 속성 상속 제거

<br />

### `inheritAttrs: false` 설정
: 최상위 요소에 어떠한 상속도 발생시키고 싶지 않을 때 사용하는 옵션 

<br />

***[예제2] 최상위 요소가 1개인 자식컴포넌트에 어떠한 속성도 상속되지 않도록 만들기***

```vue
// App.vue (부모 컴포넌트)

<template>
  <div>
    <MyBtn class="heropy">Banana</MyBtn>
  </div>
</template>

```
```vue
// 자식 컴포넌트

<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
```

<br />

### `$attrs` 설정
: `inheritAttrs: false`로 상속되지 않도록 옵션을 설정한 뒤,  
내가 원하는 요소에만 개별적으로 속성을 상속시켜줄 때 사용한다.

<br />

```vue
// App.vue (부모 컴포넌트)

<template>
  <div>
    <MyBtn
      style="color: red;"
      class="heropy">Banana</MyBtn>
  </div>
</template>

```
```vue
// 자식 컴포넌트

<template>
  <div class="btn">
    <slot></slot>
  </div>
  <h1
    :class="$attrs.class"
    :style="$attrs.style">
  </h1>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
```

<br />

![image](https://user-images.githubusercontent.com/81572770/147947769-d3e39c82-de6b-42ef-bd0c-b1695bebcf1b.png)


→ 자식 컴포넌트에 최상위 요소가 <div>태그와 <h1>태그 이렇게 2개 이상인데도,
<h1>태그에 class명과 style 속성의 상속이 잘 이루어진 것을 볼 수 있다!

해당 태그에 모든 속성을 상속시키고 싶다면  
`v-bind="$attrs"` 라고 작성하면 된다!!

<br />

```vue
  <h1 v-bind="$attrs"></h1>
```

<br />
