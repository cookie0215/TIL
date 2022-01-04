# [TIL] Vue_provide & inject

<br />

> < 컴포넌트끼리 값을 공유하는 방법 >  
> - props  
> - storage  
> - 상태 관리 라이브러리  
 
<br />

→ props는 직계부모 - 자식 관계에서만 정보를 전달할 수 있기 때문에   
최상위 component에서 최하위 component로 정보를 보내는 것은 너무나도 비효율적이다.    
ex) App.vue(최상위) - Parent.vue (상위) - Child.vue(자식이자 최하위)   

이렇게 3개의 파일이 구성되어 있을 때, 최상위컴포넌트인 App.vue에서  
최하위 컴포넌트 Child.vue로 값을 전달할 때, 중간에 상위 컴포넌트(직계부모)가 존재해야 전달이 가능하다.   
하지만 Parent.vue(직계부모)가 별도의 기능없이 단순히 최하위로 값을 전달해주기 위한 역할만 필요해서 만들어진다면 너무 비효율적인 방법이 된다.  

마찬가지로 storage, 상태 관리 라이브러리를 이용하기에는 애매한 경우가 있기 때문에   

⇒ vue는 이러한 상황을 해결하기 위해 provide/inject개념을 만들었다.

<br />
<br />

## provide
- Props처럼 부모에서 자식 컴포넌트로의 데이터 전달하기 위해 사용하는 옵션
- data처럼 함수형태로 작성하고 return키워드를 사용한다.

<br />
<br />

## inject
- 최하위(자식) 컴포넌트에서 부모컴포넌트가 provide로 제공한 데이터를  
전달 받기 위해 사용하는 옵션
- 배열형태로 작성

<br />
<br />

***[예제1] provide와 inject를 이용해 최상위컴포넌트 데이터를 최하위 컴포넌트에게 전달해 화면에 내용을 보여주기***

```vue
// App.vue (최상위 컴포넌트) 

<template>
  <div>
    <button @click="message = 'good?!'">click시 텍스트 변경</button>
    <h1>App.vue : {{ message }}</h1>
    <Parent />
  </div>
</template>

<script>
import Parent from '~/components/Parent';

export default {
  components: { Parent },
  data() {
    return {
      message: 'Hello World~!'
    }
  },
  provide() {
    return {
      msg: this.message
    }
  }
}
</script>
```
→ h1태그는 App.vue에서 전달 받은 message값을 출력하고 있고,  
  `<Parent />` 는 child.vue 컴포넌트에게 현재 'Hello World~!' 데이터를 전달하기 위해 provide옵션을 사용하였다.  

<br />

```vue
// Parent.vue (직계부모 컴포넌트)

<template>
  <Child />
</template>

<script>
import Child from '~/components/Child';

export default {
  components: { Child }
}
</script>
```
→ Child.vue(자식)컴포넌트만 불러오고 있는 상태일 뿐, props처럼 Parent컴포넌트에는 별도로 내용을 작성할 필요가 없다.  

<br />

```vue
// Child.vue (자식, 최하위 컴포넌트)

<template>
  <div>
    Child.vue : {{ msg }}
  </div>
</template>

<script>
export default {
  inject: ['msg']
}
</script>
```
→ Child.vue는 최상위 컴포넌트에서 전달한 'Hello World~!'값을 받아서 출력하기 위해   
최상위 provide에서 지정한 msg라는 이름을 inject옵션으로 전달 받는다.  
(inject옵션으로 전달 받을 때 배열형태로 작성한다!)

<br />
<br />

*provide - inject를 사용해서 데이터를 주고 받았을 때, 자동으로 반응성이 제공되지 않는다.  
(반응형을 직접 구현해주도록 코드를 작성해야 한다!)

그래서 App.vue에 만들어놓은 button을 클릭했을 때 h1의 데이터값은 변경되지만,  
Child.vue에 전달한 데이터는 변경되지 않았음을 확인할 수 있다!

<br />
<br />

### provide - inject사용 시, 반응성 유지되도록 만드는 법

1. `import { computed } from 'vue'`  
  : App.vue파일에 vue라는 패키지에서 구조분해할당으로 computed라는 옵션을 가져온다.

2. provide옵션부분에 `msg: this.message` 대신 computed()라는 함수를 작성 후,  
콜백함수를 통해 message부분이 반응성을 가질 수 있도록 만든다.  

    ```vue
    provide() {
        return {
          msg: computed(() => {
            return this.message
          })
        }
      }

    ```

3. 최하위 컴포넌트에는 전달 받을 때 msg만 불러오는 것이 아니라,  
  `{{ msg.value }}` 이렇게 msg라는 데이터의 value 속성 값을 불러와야 한다.

<br />

***결과화면***

```vue
// App.vue 

<template>
  <div>
    <button @click="message = 'good?!'">click시 텍스트 변경</button>
    <h1>App.vue : {{ message }}</h1>
    <Parent />
  </div>
</template>

<script>
import Parent from '~/components/Parent';
import { computed } from 'vue'

export default {
  components: { Parent },
  data() {
    return {
      message: 'Hello World~!'
    }
  },
  provide() {
    return {
      // msg: this.message  (반응성이 제공되지 않는 코드)

      // 반응성이 이루어지도록 작성
      msg: computed(() => {
        return this.message
      })
    }
  }
}
</script>
```
```vue
// Child.vue

<template>
  <div>
    Child.vue : {{ msg.value }}
  </div>
</template>

<script>
export default {
  inject: ['msg']
}
</script>
```
<br />

버튼 클릭 전  |  버튼 클릭 후
:------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/81572770/148021091-f6aff92a-840b-44ac-960b-a2bc387df9ad.png) | ![image](https://user-images.githubusercontent.com/81572770/148021204-c9a3f9ab-f3b4-484b-8290-0b8d6d31ad67.png)
