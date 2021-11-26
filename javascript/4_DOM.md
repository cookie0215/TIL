# [TIL] JS_DOM


### DOM요소 생성
> document.creatElement("생성할 태그");

### 생성된 DOM요소 삽입
> 부모요소.append(태그노드);
> 부모요소 안쪽에서 있는 기존 컨텐츠를 유지하면서 추가로 DOM 생성
>  *참고로 append는 element노드, 텍스트 노드 등을 넣을 수 있지만 appendChild는 오직 element노드만 넣을 수 있다.*

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

