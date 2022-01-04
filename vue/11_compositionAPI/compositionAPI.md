# [TIL] Vue_composition API

### composition API란?
- 컴포지션 API는 컴포넌트의 로직을 유연하게 구성할 수 있도록 하는 함수 기반의 API   
  → *여러개의 로직은 하나의 vue파일에 작성할 때 data 정보, mehtods, computed 등이 중구난방으로 작성되어 있는 것을 볼 수 있다.*  
    **이게 간단한 로직이면 괜찮지만 점점 더 로직이 복잡해지면 가독성과 유지보수가 어렵기 때문에*  
    *이런 문제를 해결하기 위해 **composition API**가 등장했다.*

- `setup()` 메소드를 사용해서 컴포지션 API를 만든다.   
  → 이때, 컴포지션 API는 반응성이 기본적으로 제공되지 않기 때문에   
    `reactive`, `ref`를 활용해 2가지 유형의 변경 가능한 반응형 데이터를 만든다.   

- setup() 은 data, computed, methods 등이 확인 되기 전에 호출 되므로 setup 내에서 사용할 수 없기 때문에  
  Vue패키지에서 구조분해할당 형태로 가져와야 한다.  
  ex) `import { ref , reactive , computed , watch ... } from 'vue'`  
  
- setup()은 컴포넌트가 생성된 직후에 동작한다.

<br />
<br />

## composition API 사용 방법
1. 반응성이 이루어지도록 만들기 위해 vue라는 패키지에서 `ref` 또는 `reactive` 라는 기능을 가져온다.
  → `import { ref , reactive } from 'vue'`  
  그외 다른 기능도 사용하고 싶을 때 구조분해할당으로 불러올 수 있다. ex) computed

2. `setup(){}` 이라는 메소드(옵션)을 만들어서 변수, 처리할 함수, 반환할 부분을 모두 이 곳에 작성한다.

3. `setup(){}` 에 데이터를 만들려면 해당 변수에 `ref` 또는 `reactive` 함수를 사용한 값을 할당해야 한다 → ref의 인수로 초기값을 입력

4. `ref()`로 만든 데이터를 사용하려면 `해당변수명.value` 이렇게 작성해야한다.  
  하지만 `reactive`로 만든 데이터는 해당 변수명만 가지고 사용할 수 있다! 

<br />
<br />

## `ref()` , `reactive()` 의 차이점
- **ref()**  
  - **모든 원시타입(Primitive) 값을 포함한 여러가지 타입**의 값을 받을 수 있다.
  - 데이터에 접근 및 사용 시, **value 속성을 통해 조작**할 수 있다.

- `reactive()`
  - reactive는 값을 **객체**만 받아서 생성할 수 있다.
  - reactive를 통해 생성된 객체는 모두 **깊은(Deep) 감지를 수행**하기 때문에  
    객체가 중첩된 상황에서도 반응형 데이터를 쉽게 조작하고 처리

<br />
<br />

***[기존vue코드]***

```vue
<template>
  <div @click="increase">
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  },
}
</script>
```
<br />

→ composition API를 사용하기 전에는 data, methods 등 각 옵션에 맞게 처리되는 부분을 따로따로 작성해야 했다.  

<br />
<br />

***[composiotion API - ref() 사용한 vue코드]***

```vue
<template>
  <div @click="increase">
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let count = ref(0);
    function increase() {
      count.value += 1
    }
    return {
      // count : count 이렇게 작성된 것을 축약한 것이다.
      count,
      increase
    }
  }
}
</script>
```

<br />
<br />

## composition API - computed (계산된 속성)
- `import { computed } from 'vue';`   
  → ref, reative처럼 vue패키지에서 import키워드로 가져와 실행시킨다.  

- `computed(() => { return 실행코드 })`  
  → computed속성을 콜백함수로 작성한다.  

<br />

```vue
<template>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<script>
import { ref , computed } from 'vue';

export default {
  setup() {
    let message = ref('Hello World!');
    let reversedMessage = computed(() => { 
      return message.value.split('').reverse().join('')
    })
    function changeMessage() {
      message.value = 'Good!!!'
    }

    return {
      message,
      reversedMessage,
      changeMessage,
    }
  }
}
</script>
```

<br />
<br />

## composition API - watch (변경하는 데이터를 감시)
- watch는 반응형 값의 상태 변화를 쉽게 감지할 때 사용

- `import { watch } from 'vue';`   
  → ref, reative처럼 vue패키지에서 import키워드로 가져와 실행시킨다.  

- `watch(인자1, (인자2) => { return 실행코드 })`  
  → watch 첫 번째 인자 : 감시하고자 하는 해당데이터를 의미  
    (반응성데이터가 ref로 조작되고 있을 때, 인수에 `value`를 사용할 필요가 없다!)  

   → watch의 두번째 인수 : 콜백함수  
  
  즉, getter가 반환하는 반응형 값 또는 ref값이 변경될 경우, 두 번째 인자로 전달된 콜백을 실행하는 것! (변화가 감지될 때, 그 변화된 데이터를 출력해준다.)

<br />

```vue
<template>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<script>
import { ref , computed } from 'vue';

export default {
  setup() {
    let message = ref('Hello World!');
    let reversedMessage = computed(() => { 
      return message.value.split('').reverse().join('')
    })

    // watch의 첫번째 인수 : 감시하고자 하는 해당데이터 (value를 사용할 필요가 없다)
    // watch의 두번째 인수 : 콜백함수
    watch(message, (newValue) => { return console.log(newValue) })
    watch(reversedMessage, (newValue) => { return console.log(newValue) })

    function changeMessage() {
      message.value = 'Good!!!'
    }

    return {
      message,
      reversedMessage,
      changeMessage,
    }
  }
}
</script>
```

<br />
<br />

## composition API - Life Cycle Hooks
- 기존 vue에서 사용했던 라이프사이클 훅 역시, composition API에서 사용할 수 있다.
- created, mounted 등 기존의 라이프사이클 훅을 사용하려면   
  반드시 이름 앞에 `on`을 붙여서 camelCase형태로 사용해야 한다!   
- setup()메소드는 컴포넌트가 생성된 직후에 동작하기 때문에   
  composition API에 created() 훅은 존재하지 않는다!!

*참고로 composition API의 setup()에서 사용하는 라이프사이클 훅은*   
*기존 라이프사이클 훅 이름과 다른 것이 몇개 있다.*

<br />

기존Vue의 <br />Life Cycle Hooks      |  composition API의 <br /> Life Cycle Hooks
:------------------------------------:|:-------------------------------------------| 
beforeCreate | 필요하지 않음*
created |	필요하지 않음*
beforeMount |	onBeforeMount
mounted	| onMounted
beforeUpdate | onBeforeUpdate
updated |	onUpdated
beforeUnmount |	onBeforeUnmount
unmounted	| onUnmounted
errorCaptured |	onErrorCaptured
renderTracked	| onRenderTracked
renderTriggered |	onRenderTriggered

<br />