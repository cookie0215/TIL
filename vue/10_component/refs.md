# [TIL] Vue_refs
가끔 vue에서 요소에 JavaScript를 이용해 직접 접근해야 하는 경우가 있다. 
이 경우, `ref` 속성을 이용해 레퍼런스 ID를 자식 컴포넌트나 HTML 요소에 부여함으로써 직접 접근할 수 있다.

<br />

## ref
- javascript에서 해당 요소에 직접 접근하고 싶을 때 id명을 활용해서 접근했는데  
  vue에서는 요소에 `ref=""` 를 통해서 해당 요소에 접근할 수 있다.
- 해당 ref요소를 사용하고 싶다면 `this.$refs` 로 작성한다!

<br />

```vue
<template>
<!-- id명을 vue에서는 ref로 사용한다. -->
  <h1 ref="hello">
    Hello World!
  </h1>
</template>

<script>
export default {
  // mounted() 훅은 실제DOM에 만들어진 바로 직후에 생성되기 때문에 DOM에 접근할 수 있다! (다른 created() 훅 등에서는 접근 불가능!)
  mounted() {
    // const h1 = document.querySelector('#hello');
    console.log(this.$refs.hello);
    console.log(this.$refs.hello.textContent);
  }
}
</script>
```
![image](https://user-images.githubusercontent.com/81572770/148025943-fc2fea46-b4d5-4639-bd78-5619b289ba5f.png)

<br />

→ id명 대신 ref속성으로 h1태그에 hello라는 이름을 명시해주었다.  
  그리고 h1을 console에 출력하기 위해 라이프사이클 중 mounted() 훅 부분에    
  `console.log(this.$refs.명시한이름);` 을 작성하면 `<h1> Hello World! </h1>` 가 console에 출력되는 것을 볼 수 있다.

*mounted() 훅은 가상DOM에 있던 내용들이 실제 DOM에 부착된 직후에 생성되는 라이프사이클 훅이기 때문에  
이 곳에서 DOM요소에 접근할 수 있게 된다!!   

만약 created() 훅에 위의 코드를 작성했다면, 에러가 출력되는 것을 볼 수 있다.

<br />
<br />

## 컴포넌트에서 ref 사용하기
- 컴포넌트를 기존에 연결하던대로 연결한 뒤, console에 ref를 활용한 요소를 출력할 땐  
`this.$refs.명시한이름.$el` 라고 작성해야 자식컴포넌트에 작성된 요소에 접근할 수 있다.

<br />

```vue
// Hello.vue (자식 컴포넌트)

<template>
  <p>안녕하세요~!</p>
</template>
```

```vue
// App.vue (부모 컴포넌트)

<template>
  <Hello ref="hello" />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: { Hello },
  mounted() {
    console.log(this.$refs.hello);
    console.log(this.$refs.hello.$el);
    console.log(this.$refs.hello.$el.textContent);
  }
}
</script>
```
![image](https://user-images.githubusercontent.com/81572770/148026474-668f4cdf-6779-41c1-8379-b1938070a4a2.png)

<br />

→ `this.$refs.hello.$el` 이라고 작성해야 `<p>안녕하세요~!</p>`가 잘 출력되는 것을 볼 수 있다!

그런데 만약 자식 컴포넌트에 최상위 요소가 2개라면...?
`$el` 로 ref를 참조할 수 없다...   
왜냐하면 부모컴포넌트에서 전달되는 ref가 어느 최상위에 들어가야 할지 몰라서 ref가 적용되지 못한다.

그렇다면 어떻게 원하는 요소에 ref를 참조할 수 있을까?

<br />
<br />

### 자식 컴포넌트에 최상위 요소가 2개일 때 ref 사용 방법
- 자식 컴포넌트에 2개의 최상위 요소 중 ref를 참조하고 싶은 부분에   
  이름을 명시한다.
- 부모 컴포넌트 mounted() 훅에 `this.$refs.부모컴포넌트에지정한이름.$refs.자식컴포넌트에지정한이름` 이렇게 작성해서 해당 요소를 출력할 수 있다.

<br />

```vue
// Hello.vue (자식 컴포넌트)

<template>
  <p>안녕하세요~!</p>
  <p ref="welcome">환영합니다0_0</p>
</template>
```
```vue
// App.vue (부모 컴포넌트)

<template>
  <Hello ref="hello" />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: { Hello },
  mounted() {
    console.log(this.$refs.hello.$refs);
    console.log(this.$refs.hello.$refs.welcome);
  }
}
</script>
```
![image](https://user-images.githubusercontent.com/81572770/148028146-275dca7e-35ee-4e01-8659-1d41fc3f7363.png)