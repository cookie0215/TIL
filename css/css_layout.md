# [TIL] CSS_레이아웃 관련 요소

## `position` : 위치 관련 스타일

### `static` : 기본값
> 문서를 요소의 일반적인 흐름에 따라 배치

<br>

### `relative` : 상대적 배치
> static과 같으나 `top`, `bottom`, `left`, `right`속성을 지정 가능
> - `absolute`를 포함하는 부모 요소로 주로 사용됨

<br>

### `absolute` : 절대적 배치
> 족보상 가장 가까운, `static`인 아닌 조상 기준 상대적 위치에 배치
> - 페이지 내 **공간을 차지하지 않음**
> - static이 아닌 요소들끼리는 `z-index`값으로 위, 아래(앞쪽, 뒷쪽) 배치

<br>

### `fixed` : 고정
> 부모 요소가 아닌, viewport를 기준으로 배치
> - **스크롤에 영향을 받지 않음**
> - 페이지 내 **공간을 차지하지 않음**

<br>
<br>

***

<br>

## `display` : 요소를 보여주는 방법

### `inline` | `block` | `inline-block` | `flex`

> block요소와 inline요소들을 display의 스타일 속성을 이용해 요소의 속성을 바꿀 수 있다.

<br>

### `none`
| 스타일 | 설명 | 비고 |
| :-- | :-- | :-- |
| display: `none` | 요소를 화면에 두지 않음 | 자리를 차지하지 않음 |
| visibility: `hidden` | 요소를 화면에 두되 보이지 않도록 함 | 자리 차지 |
| opacity: `0` | 요소를 화면에 두고 불투명도를 0으로 함 | 자리 차지 |


