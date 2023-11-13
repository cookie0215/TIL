# [TIL] HTML 폼

### `<form>`
- 정보 제출에 사용되는 문서 구획  
- 내부 입력 양식들의 부모, 컨테이너 역할
- 입력된 정보들을 어떻게 서버에 전달할지 설정
- 내부에 폼 관련 태그가 아닌 요소도 포함 가능

|속성|역할|값|
|:--|:--|:--|
|id|고유값 (이전의 name을 대체)|
|~~name~~|id를 사용할 것|텍스트|
|method|입력된 정보들의 전달 방식|`get`, `post`|
|action|정보들을 처리할 서버상의 프로그램 지정|텍스트|
|autocomplete|이전 입력 내역 있을 시 자동완성|`on`, `off`|

<br>

> `<form>` 태그 없이도 정보 제출이 가능하지만, 활용시 여러 유용한 기능들이 있음 

<br>

***

<br>

## 폼 요소

### `<label>`
- 각 입력 양식의 레이블을 표시  
- 입력 양식의 **클릭 가능 영역** 확장

|속성|역할|값|
|:--|:--|:--|  
|for|어떤 입력 양식의 레이블인지 지정|해당 입력 양식 요소의 id값|

<br>

### `<input>`

|공통 속성|역할|값|비고|
|:--|:--|:--|:--|
|id|고유값, label과 연결|텍스트||
|autocomplete|자동완성|boolean||
|autofocus|페이지로 들어올 때 커서가 위치|boolean|페이지에서 하나만 사용되어야 함|
|disabled|수정 불가, 값이 전송되지 않음|boolean||
|name|서버로 전송될 항목명|텍스트||
|readonly|수정 불가, 입력된 값은 전송됨|boolean||

<br>
<br>

#### input type유형들

```html
 <input type="text">       // 일반 텍스트 입력  
 <input type="password">  // 패스워드 입력 (••• 등으로 표시)  
 <input type="tel">      // 전화번호 입력 (모바일 등에서 전화번포 키패드 표시)
.
.
.
```

|속성|역할|값|
|:--|:--|:--|  
|placeholder|입력값이 공백일 시 보여질 텍스트|텍스트|
|maxlength|최대 글자 수|숫자|

<br>
<br>

#### type : number

```html
 <input type="number"> // 숫자값 입력  
```

|속성|역할|값|
|:--|:--|:--|  
|max|최대 입력값|숫자|
|min|최소 입력값|숫자|
|step|입력 가능한 값의 간격 (2: 0, 2, 4, 8)|숫자|

<br>
<br>

#### type : checkbox

```html
 <input type="checkbox">  // 체크박스   
```

|속성|역할|값|
|:--|:--|:--|  
|checked|체크로 초기화 여부|boolean|

<br>
<br>

#### type : radio 
- radio버튼은 a라는 그룹안에 여러개의 버튼 중 1개만 선택이 가능
- name속성을 이용해 버튼그룹을 만든다.

```html
 <input type="radio">  // 라디오(택일)  
```

|속성|역할|값|
|:--|:--|:--|  
|checked|체크로 초기화 여부|boolean|
|name|속한 선택지의 구분자|텍스트|

<br>
<br>

#### type : file

```html
 <input type="file">  // 파일 첨부   
```

|속성|역할|값|
|:--|:--|:--|  
|multiple|여러 파일 가능 여부|boolean|

<br>
<br>

#### tpye : submit
- 전체적인 input의 값/양식을 전송(제출)하는 버튼

```html
 <input type="submit">  // 제출버튼   
```



***
<br>

### `<select>`와 `<option>`

```html
 <select>
  <option></option>
  <option></option>
 <select>
```

#### `<select>` : 선택지  

|속성|역할|값|
|:--|:--|:--|
|id|고유값, label과 연결|텍스트|
|name|서버로 전송될 항목명|텍스트|

#### `<option>` : 선택 항목  

|속성|역할|값|비고|
|:--|:--|:--|:--|
|value|서버로 전송될 값|텍스트||
|selected|선택 여부|boolean|`<select>`당 하나의 `<option>`에만 가능|

<br>
***
<br>

### `<textarea>`
여러 줄의 텍스트를 입력할 수 있는 태그

|속성|역할|값|
|:--|:--|:--|
|placeholder|입력값이 공백일 시 보여질 텍스트|텍스트|
|maxlength|최대 글자 수|숫자|
|rows|보이는 줄의 수|숫자|

<br>
***
<br>

### `<button>`
|속성|역할|값|
|:--|:--|:--|
|type|버튼의 역할|`submit`, ~~`reset`~~, `button`|
|disabled|비활성화|boolean|

`[주의]` 제출용 버튼이 아닐 시 type을 '**button**'으로 지정해주는 것이 좋다.

```html
 <button type="button">버튼</button>
```


<br>
<hr>
<br>

### required 속성
- 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시


```html
 <input type="text" required />
```

즉, input 태그에 required 속성이 기입되어야지만, 폼 데이터가 서버로 제출된다.

`[참고]` required 속성이 제대로 동작하는 input 요소의 type 속성값은 다음과 같다.
```
checkbox, date, email, file, number, password, pickers, radio, search, tel, text, url
``` 