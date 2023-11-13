# [TIL] CSS_display

## `display` 속성

### `inline` | `block` | `inline-block` | `flex` | `none` ....

> block요소와 inline요소들을 display의 스타일 속성을 이용해 요소의 속성을 바꿀 수 있다.

<br>

####  `1) inline 속성`
> `<span>, <a>, <img>...`
- 전후 줄바꿈 없이 한줄에 다른 요소들과 나란히 배치
- 컨텐츠의 크기 만큼만 공간을 차지하기 때문에 `width`와 `height` 속성을 지정해도 `무시`된다
- margin과 padding 속성은 `좌우 간격만 반영`이 되고, 상하 간격은 반영이 되지 않는다.

<br>

#### `2) block 속성`
> `<div>, <p>, <h1~6>, <ul>, <form>...`
- 해당 라인의 모든 너비를 차지
- inline 속성요소들과 달리 `width`, `height`,`margin`,`padding` 속성이 모두 반영된다.

<br>

#### `3) inline-block 속성`
> `<button>, <input>, <select>...`
- 해당 요소 자체는 인라인(inline) 요소처럼 동작 하지만, 해당 요소 내부에서는 블록(block) 요소처럼 동작 <br>
→ inline 요소처럼 한 줄에 다른 요소들과 함께 나란히 배치되면서 
`width`, `height`,`margin`,`padding` 속성들도 모두 반영된다.


<br>
<br>

### `HTML 요소 숨기기`
| 스타일 | 설명 | 비고 |
| :-- | :-- | :-- |
| display: `none` | 요소를 화면에 두지 않음 | 자리를 차지하지 않음 |
| visibility: `hidden` | 요소를 화면에 두되 보이지 않도록 함 | 자리 차지 |
| opacity: `0` | 요소를 화면에 두고 불투명도를 0으로 함 | 자리 차지 |


