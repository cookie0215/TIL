# [TIL] JS_DOM


### DOM요소 생성
> **document.creatElement("생성할 태그");**  

<br>

### 생성된 DOM요소 삽입
> **부모요소.append(태그노드);**  
> 부모요소 안쪽에서 있는 기존 컨텐츠를 유지하면서 추가로 DOM 생성  
> *참고로 append는 element노드, 텍스트 노드 등을 넣을 수 있지만 appendChild는 오직 element노드만 넣을 수 있다.*

<br>

```javascript
let div = document.querySelector("div");
let h1 = document.creatElement("h1");

div.append(h1);

/*
html파일
<div>
   <h1><h1>
<div>

*/
```
<br>
<br>

### 동적으로 DOM요소에 class명 지정
> **document.querySelector("태그명").className = "abc";**  
> **document.querySelector("태그명").className = "abc def";**  
>  : class명을 이렇게 2개 이상 지정할 수 있다.  

<br>

### class명 추가 또는 제거
- 제이쿼리에서 addClass(), removeClass() 와 동일한 개념이다.
> **document.querySelector("태그명").classList.add("abc");**  
> **document.querySelector("태그명").classList.remove("abc");**  

<br>
<br>

## input 요소 다루기

<br>

### `document.querySelector("input").value`
- <input type="text">에 입력된 값을 가져오거나 변경할 수 있다.

<br>

### `document.querySelector("input").checked;`
- checkbox 상태가 체크가 되어 있는지, 아닌지를 확인할 수 있다.

> **`document.querySelector("input").checked = true;`** : 체크가 되어 있는 상태  
> **`document.querySelector("input").checked = false;`** : 체크가 되어 있지 않은 상태  

<br>

- 만약 체크되어 있는 항목을 찾고 싶을 땐  

```html
<input id="hobby1" type="checkbox" name="hobby">
<label for="hobby1">cycling</label>

<input id="hobby2" type="checkbox" name="hobby" checked>
<label for="hobby2">swimming</label>

<input id="hobby3" type="checkbox" name="hobby">
<label for="hobby3">reading</label>
```
```javascript
// checkbox항목 중 name속성을 이용해 check된 항목 찾기
const checked = document.querySelector("input[name=hobby]:checked");
console.log(checked);
```

<br>
<br>

---

### 요소 복사하기
> **document.querySelector("태그명").cloneNode();**  
> : cloneNode() 는 해당 태그(껍데기)만 복사해온다.  
> 만약 해당 태그안에 자식요소까지 모두 복사해오고 싶다면  
>  **document.querySelector("태그명").cloneNode(true);** 라고 입력해야 한다!!  
> *복사한 요소를 html에 넣으려면 .append()를 사용해야 한다!*  

<br>

