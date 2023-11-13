# [TIL] Vue_slot

<br />

### slot
- 특정 컴포넌트에서 자신에게 등록된 자식 컴포넌트의 내용을 재정의 할 수 있는 디렉티브
- 자식(하위) 컴포넌트를 그대로 유지하면서 다른 부모(상위) 컴포넌트들마다 다른 내용을 적용하고 싶을 때 사용  
  (컨텐츠를 삽입하고 싶을 때 사용, 무언가를 집어넣을 수 있도록 만든 통로!)

<br />

## slot 사용 방법

1. 우선 **부모 컴포넌트**에 자식 컴포넌트를 불러와 `< Header />` 로 작성하지 않고, 열고 닫는 `<Header> </Header>` 구조로 작성해준다.

2. 그리고 그 사이에 `<Header>hello world</Header>` 이렇게 텍스트를 작성해준다.

3. **자식 컴포넌트**는 부모컴포넌트가 자식에게 보낸 'hello world' 라는 텍스트를 삽입된 값을 전달 받기 위해 `<slot></slot>` 을 작성한다.

4. 컴포넌트가 렌더링될 때 부모 컴포넌트에서 전달 받은 hello world로 값이 바뀌는 것을 볼 수 있다!

<br />

> slot은 단순 텍스트뿐만 아니라, 다른 컴포넌트 자체를 받을 수 있다.    

<br />

## Fallback 컨텐츠
- 만약 부모 컴포넌트에서 아무것도 전달하지 않는 경우,     
  자식컴포넌트가 `<slot></slot>`태그 안에 default값으로 보여줄 값을 지정해놓을 수 있다!!   
  ex) `<slot>hahaha!</slot>`  

<br />
<br />

## Named Slots (이름이 있는 슬롯)
- 컴포넌트에 여러개의 슬롯을 지정할 수 있는데 이때 이름을 부여해서  
  원하는 slot자리에 값을 전달할 수 있다.
- 이름을 지정해놓지 않은 slot은 default이다.

<br />

> < Named Slots 사용방법 >
>
> 이름이 있는 슬롯은 전달하는 쪽(상위컴포넌트)에서 전달하고 싶은 부분을 `<template>`로 감싼 뒤, `v-slot:${name}` 디렉티브를 작성,    
> 받는 쪽(하위컴포넌트)에서 `<slot name=${name}>` 문법 으로 작성
> *(${name} 이 안에 내가 지정하고 싶은 이름을 넣으면 된다!)*
>
> **`v-slot:` 은 `#` 축약형으로 사용할 수 있다!!**

<br />

***[연습1] named slots 만들기***

```vue
// App.vue (부모 컴포넌트)
<template>
  <div>
    <MyBtn>
      <template #text>
        <span>Apple</span>
      </template>
      <template v-slot:icon>
        <span>🍎</span>
      </template>
    </MyBtn>
  </div>
</template>

<script>
import MyBtn from './components/MyBtn';

export default {
  components: { MyBtn },
}
</script>

```
```vue
<template>
  <div class="btn">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>
```

<br>

→ 아이콘 - 텍스트 형태로 화면에 보여주고 싶은데  
  만약 부모 컴포넌트에서 텍스트 - 아이콘 이렇게 위치를 바꿔서 작성했다면   
  named slot를 지정해서 자식 컴포넌트가 전달 받은 이름을 원하는 순서대로 아이콘 - 텍스트 형태로 작성해 화면에 보여줄 수 있다!

<br />
<br />

## Scoped Slots (범위가 있는 슬롯)
- 자식 컴포넌트에 정의 되어있는 데이터를 부모에서 접근 하고 싶을땐  
  슬롯 속성 (slot props)을 사용한다.

<br />

> < Scoped Slots 사용방법 >
>
> 자식 컴포넌트 <slot v-bind:${부모에게 전달할 이름}="전달할 데이터">   
> 부모 컴포넌트 <v-slot:${name(없으면 default)}=${파라미터명}>

<br />

***[연습2] Scoped Slots 만들기***

```vue
// 자식 컴포넌트

<template>
  <div>
    <slot name="myName" v-bind:user="user">
        <input :value="user.lastName">
    </slot>
  </div>
</template>
<script>
  export default {
      name: 'ScopeSlotComponent',
      data() {
          return {
              user: {
                  firstName: 'Sunny',
                  lastName: 'Kim'
              },
          }
      }
  }
</script>
```
```vue
// 부모 컴포넌트

<template>
  <div id="app">
    <scope-slot-component>
      <template v-slot:myName="slotProps">
        <input :value="slotProps.user.lastName">
      </template>
    </scope-slot-component>
  </div>
</template>

<script>
import ScopeSlotComponent from './components/slots/ScopeSlotComponent.vue'
export default {
  name: 'App',
  components: {
    ScopeSlotComponent,
  }
}
</script>
```

<br />

→ slotProps: 자식에서 슬롯 요소에서 바인딩 시킨 user 데이터를 가지고 있는 것으로 (자식의 user 데이터를 slotProps 로 받아 오는 용도),  
다른 이름으로 바꿔서 명시해줘도 상관 없다!

<br />