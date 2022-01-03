# [TIL] Vue_리스트 렌더링
Array나 Object등에 있는 데이터를 반복적으로 불러와서 화면에 보여주는 것

<br />

## `v-for`
- 배열이나 객체에 있는 데이터를 반복문을 사용해서 화면에 보여줄 수 있다. (자바스크립트의 for문처럼 생각하면 됨!)
- v-for 뒤에는 :key="" 속성을 작성해줘야 한다!  
  → key는 Vue의 가상 DOM 알고리즘이 노드의 ID를 식별하거나 기존의 엘리먼트를 재사용할 수 있게 힌트로 사용되는 것으로  
  데이터가 바뀌고 돔이 다시 랜더링 될 때, key를 기준으로 무엇을 다시 랜더링해야할지 판단하기 때문에     
  **반드시 고유한 값으로 지정**해줘야 한다!
  

<br />

> **`v-for="아이템명 in array" :key="변수의 key값"`**  
> **`v-for="(아이템명,인덱스) in array" :key="변수의 key값"`**

<br />

***[예제1-1] fruits 배열의 아이템를 각 li에 담아서 출력하기 ***

<br />

```vue
<template>
  <ul>
    <li 
      v-for="(fruit, index) in fruits"
      :key="fruit">
      {{ index }}번 : {{ fruit }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['pineapple', 'cherry', 'grape']
    }
  }
}
</script>
```

<br />

***[예제1-2] 예제1-1번의 원본 fruits 배열안의 아이템들을 mpa()을 이용해 각 아이템마다 고유값이 존재하도록 만들고, 각 li에 출력하기 ***

```vue
<template>
  <ul>
    <li 
      v-for="fruit in fruitObj"
      :key="fruit">
      {{ fruit.id }}번 : {{ fruit.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['pineapple', 'cherry', 'grape']
    }
  },
  computed: {
    fruitObj() {
      return this.fruits.map((fruit, index) => {
        return { id: index, name: fruit }
      })
    }
  }
}
</script>
```
→ 기존의 fruits 배열안에 문자열형태로 들어있던 아이템들을 map()메서드를 통해 각각의 배열아이템들을 고유한 id값이 존재하도록 만들었다.  
  그 이유는 화면을 좀 더 최적화 시키기 위해 각각의 배열아이템을 구분할 수 있도록 배열 안에 아이템들을 객체로 만든 것이다.
  
<br />

`v-for="fruit in fruitObj"` 부분을 객체 구조 분해 할당 형태로도 작성할 수 있다!   
→ `v-for="{ id, name } in fruitObj"`

<br />

*참고) 고유 id값을 만드는 게 고민이라면 npm에서 shortid 패키지를 설치해 id랜덤하게 만들어줄 수 있다!*

<br />

> 1. `npm i shortid` 패키지 설치   
> 2. 해당 vue파일에 `import shortId from 'shortid';`로 설치한 패키지 불러오기  
> 3. `id: shortId.generate(),` id의 키값을 shortId.generate()로 작성해서 랜덤으로 id 데이터 생성함


<br />
<br />

## 배열 변경 감지하는 **변이 메서드**
- 변이 메서드는 호출된 원본 배열 데이터를 변형시킨다.
- **변이 메서드의 종류**  
  - push() : 배열의 마지막 위치에 아이템을 추가
  - pop() : 배열의 마지막 아이템을 추출 반환
  - shift() : 배열의 첫번째 아이템을 추출 반환
  - unshift() : 배열의 첫번째 위치에 아이템을 추가
  - splice() : 인덱스를 활용해 배열아이템을 추가, 삭제할 때 사용
  - sort() : 배열을 정렬시킬 때 사용
  - reverse() : 배열을 뒤집을 때 사용

<br />
<br />

## 배열을 교체해서 사용하는 **비-변이 메서드**
- 원본 배열을 변경하지 않고 새로운 배열을 반환하는 메서드
- vue는 DOM을 재사용할 때 좀 더 효율적으로 사용하도록 만들었기 때문에 원본 배열을 새로운 배열로 교체된다고 해서 DOM을 다시 렌더링 하지 않는다.  
→ 각 배열 아이템에 고유 key값을 기준으로 화면에 렌더링하기 때문에 좀 더 최적화에 뛰어남!
- **변이 메서드의 종류**  
  - filter()
  - concat()
  - slice() 