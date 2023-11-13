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
- computed는 **기본적으로 Getter를 방식만 사용 가능**하며,   
  만약 computed로 계산되어 반환된 결과값을 바꿔서 사용하고 싶을 땐 Setter를 직접 설정해서 사용한다.

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

### getter
- data속성에 작성한 값은 기본적으로 Getter , Setter 둘 다 사용이 가능하지만,  
  computed에 만들어 놓은 하나의 계산된 데이터는 Getter로, 읽기 전용(Read only)만 가능한 형태이다.  
  → 할당 연산자로 어떤 값을 할당하더라도 반응적으로 동작할 수 있는 구조가 아니기 때문에,  
  내부의 기본적인 로직을 통해서 값을 얻어낼 수 있는 용도, getter로만 사용이 가능하다. (결과값 변경 불가능)

<br>

### setter
- 값을 읽을 수 있을 뿐만 아니라 추가로 값을 변경할 수 있다.
- 단순히 console에 해당 값을 출력해보고 싶을 때 사용할 수 있다.

<br>

> computed 데이터에 get 과 set 형태로 만드려면  
> computed의 데이터를 작성할 때 메소드 형식으로 만드는 것이 아니라 ***하나의 객체 데이터를 할당하는 속성***으로 만든다.  
> 그리고 그 속성 안에 get(), set()메소드로 코드를 작성해준다!

<br>

```javascript
// 기본적으로 get방식으로만 작성된 형태
computed: {
    reversedMsg() {
      return this.msg.split('').reverse().join('')
    }
}
```
```javascript
// get() 과 set()을 지정
computed: {
    reversedMsg: {
      // get() : 값을 얻어 내기 위한 용도의 로직 작성
      get() {
        return this.msg.split('').reverse().join('')
      },

      // set() : 어떠한 값이 할당될 때(ex. 해당 이벤트가 발생할 때) set() 부분이 실행될 수 있도록 로직 작성
      // 첫번째 인수로 들어오는 값을 명시할 수 있다.
      set(newVal) {
        this.msg = newVal
      }
    }
  },
```

<br>

***[예제]***

```vue
<template>
  <div>
    <button @click="add">Add</button>
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
    reversedMsg: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(value) {
        console.log(value);
        // add라는 메소드가 동작할 때 set에 부분의 로직이 실행된다.
        this.msg = value
      }
    }
  },
  methods: {
    add() {
      this.reversedMsg += '?!'
    }
  }
}
</script>

```
Add버튼 클릭 전             |  Add버튼 1번 클릭 후
:-------------------------:|:-------------------------:
![add버튼 클릭 전](https://user-images.githubusercontent.com/81572770/147867981-6cc6c22d-2bcd-4609-a5fb-cc26f146093c.JPG) | ![add버튼 클릭 후](https://user-images.githubusercontent.com/81572770/147868042-efbc7aec-50c8-4a05-a29d-1b1449c3a0fd.JPG)

🤔 **왜 '!detupmoC olleH?!' 가 아니라 '?!Hello Computed!'로 나타날까..??**  

<br>

→ 먼저 기존의 `Hello Computed!` 를 computed안에 작성된 getter를 통해 `!detupmoC olleH` 라고 값이 반환된다.  
  그리고 add버튼을 클릭 시, methods에 작성한 add함수가 동작한다.  
  (!detupmoC olleH 이렇게 작성된 reversedMsg데이터값 뒤에 '?!' 를 추가)  
  '!detupmoC olleH?!' 값을 set()에 작성한 value라는 매개변수로 전달 받아서 다시 msg변수에 할당을 시켰다.

  여기서 console.log(value); 를 찍어보면 '!detupmoC olleH?!' 라는 값이 출력되는 것을 볼 수 있다.

  그다음, '!detupmoC olleH?!' 이 결과값이 다시 get()부분에 할당이 되어 글자가 거꾸로 반환되는 로직이 실행되고  
  결국 `?!Hello Computed!` 라고 화면에 나타나는 것을 볼 수 있다!!

  한 번 누른 버튼을 다시 누르면 '?!' 가 추가되면서 문자는 `!?!detupmoC olleH?!` 이렇게 거꾸로 출력되는 것을 볼 수 있다!!

<br>
<br>
<br>

## watch
- 특정 데이터의 변화를 감지하여 자동으로 특정 로직을 수행하는 속성
- 변화를 감시하고 싶은 data 속성을 가져와서 메소드 형태로 작성한다.  
  → 첫 번째 매개변수 : 새로운 값, 실제로 변경된 값을 가져와 사용할 수 있다.  
    두 번째 매개변수 : 기존 값
- data 값 뿐만 아니라, computed에 계산된 값을 감시할 수도 있다!

<br>

```javascript
// ... 

data() {
  return {
    message: "",
  };
},
watch: {
  message(newValue, oldValue) {
    console.log("newValue : ", newValue);    // this.message를 newValue라고 작성할 수 있다.
    console.log("oldValue : ", oldValue);
  },
},

// ...

```

<br>
<br>
<br>

## methods
- 일반적으로 함수를 정의할때 사용하는데, Computed 와 호출되는 조건이 다르다.
- Methods는 라이프 사이클에 영향을 받는다.  
template 내부에 선언된 methods 중에서 update 라이프사이클이 동작한(= 아무 변수나 변경될 때)다면 함수를 모두 실행함
- Methods는 종속된 값이란 개념없이 **렌더링이 일어날 때마다 계속 호출**
(computed는 종속된 값에 의존하고, 반환된 결과를 캐싱(저장)하기 때문에 렌더링이 발생할 때마다 호출되는 것이 아니라 값이 바뀔때만 호출한다!)

<br>
