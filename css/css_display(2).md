# [TIL] CSS_display : flex
flex 사용 이전에는 float, inline-block 속성값을 활용해 레이아웃 요소들을 배치 시켰는데, flex 속성값을 활용해 보다 더 유연하고 편리하게 요소들을 배치할 수 있게 되었다.

## `Flex`
부모(상위)요소에 flex 값을 지정하면, 자식 요소들을 특정한 위치에 배치시킬 수 있다.

### `Flex 구조`
> 부모요소에 `display: flex;`를 설정하면, 자식 요소들은 설정된 속성에 따라 배치된다 <br>
> | 요소 | 설명 |
> | :-- | :-- | 
> | `Flex Container` | 부모 요소 |
> | `Flex Item` | 자식 요소 |

```css
.container { display: flex; }
```

```html
<body>
  <div class="container">
    <div class="item1">1번</div>
    <div class="item2">2번</div>
    <div class="item3">3번</div>
    <div class="item4">4번</div>
    <div class="item5">5번</div>
  </div>
</body>
```

<br>

### `Flex 속성 사용하기`
부모 요소와 자식 요소에 flex 속성을 구분해서 사용해야 한다. 
>- flex container 속성 : flex-direction, flex-wrap, justify-content, align-items, align-center
<br>
>- flex item 속성 : flex, flex-grow, flex-shrink, flex-basis, order

<br>

### 1. Flex Container [부모요소] 에 사용되는 속성
<hr>

#### 1) `display`
: 부모요소에 `display: flex;`를 설정하면, 자식요소들은 가로방향으로 배치

<br>

#### 2) `justify-content`
: 주 축의 방향을 정렬하는 속성

| 속성값 | 설명 |
| :-- | :-- | 
`flex-start` | 자식요소들의 주 축을 **시작점**으로 정렬 *(기본값)*
`flex-end` | 자식요소들의 주 축을 **끝점**으로 정렬
`center` | 자식요소들의 주 축을 **가운데**로 정렬
`space-between` | 자식요소들의 시작과 끝을 양(왼/오른쪽)끝에 붙이고 자식요소 사이에 균등하게 여백을 주어 정렬
`space-around` | 모든 자식요소들의 좌우의 균등한 여백을 주어 정렬
`space-evenly` | 모든 자식요소들의 사이와 양끝에 균일한 간격을 주어 정렬


![1분코딩님 블로그 참고](https://studiomeal.com/wp-content/uploads/2020/01/10-1.jpg)

<br>

> *justify-content : flex-start 와 flex-end 값은 flex-direction 속성 값인 row 또는 column 배치에 따라 시작점과 끝점이 달라진다.*

<br>

#### 3) `align-items`
: 교차축의 정렬 방법


| 속성값 | 설명 |
| :-- | :-- | 
`stretch` | 자식요소들이 부모요소의 높이 만큼 아래로 쭉 늘어남  *(기본값)*
`flex-start` | 자식요소들의 교차 축을 **시작점**으로 정렬
`flex-end` | 자식요소들의 교차 축을 **끝점**으로 정렬
`center` | 자식요소들의 교차 축을 **가운데**로 정렬
`base-line` | 자식요소들의 문자 기준선에 따라 정렬

<br>

> *align-items : flex-start 와 flex-end 값은 flex-direction 속성 값인 row 또는 column 배치에 따라 시작점과 끝점이 달라진다.*

<br>

#### 4) `flex-direction`
: 자식요소들이 배치되는 축의 방향을 결정하는 속성

| 속성값 | 설명 |
| :-- | :-- | 
`row` | 가로(행) 방향 배치 [→] *(기본값)*
`column` | 세로(열) 방향 배치 [↓]
`row-reverse` | **역순**으로 가로(행) 방향 배치 [←]
`column-revers` | **역순** 세로(열) 방향 배치 [↑]

<br>

#### 5) `flex-wrap`
: 부모요소에 더이상 자식요소를 한 줄에 담을 수 없어서 `줄바꿈을 설정`할 때 사용하는 속성

| 속성값 | 설명 |
| :-- | :-- | 
`nowrap` | 줄 바꿈 X *(기본값)*
`wrap` | 줄 바꿈 O
`wrap-reverse` | 역순으로 줄 바꿈 O

<br>

#### 6) `align-content`
: `flex-wrap: wrap;`이 설정된 상태에서, 아이템들의 행이 2줄 이상 되었을 때의 교차 축 방향 정렬을 결정하는 속성

| 속성값 | 설명 |
| :-- | :-- | 
`stretch` | 자식요소들이 부모요소의 높이 만큼 아래로 쭉 늘어남 *(기본값)*
`flex-start` | 자식요소들의 교차 축을 **시작점**으로 정렬
`flex-end` | 자식요소들의 교차 축을 **끝점**으로 정렬
`center` | 자식요소들의 교차 축을 **가운데**로 정렬
`space-between` | 자식요소들의 시작과 끝을 양(위/아래)끝에 붙이고 자식요소 사이에 균등하게 여백을 주어 정렬
`space-around` | 모든 자식요소들의 좌우의 균등한 여백을 주어 정렬
`space-evenly` | 모든 자식요소들의 사이와 양끝에 균일한 간격을 주어 정렬

<br>
<br>
<br>

### 2. Flex Item [자식요소] 에 사용되는 속성
<hr>

#### 1) `order`
: 각 자식요소들의 순서를 결정하는 속성

```css
.item1 { order : 0; }    // 기본값
.item2 { order : 2; }
.item3 { order : 1; }
```

- 작은 숫자 값일 수록 먼저 배치됨
- 시각적인 순서만 바꿀 뿐, HTML 구조 자체를 바꾸는 것이 아니기 때문에 웹 접근성 측면에서는 사용하지 않는 것이 낫다. <br>
*→ order를 이용해서 순서를 바꿔도 시각적으로는 순서가 바뀐 것처럼 보이지만, 시각장애인들이 스크린 리더기로 화면을 읽을 땐 적용되지 않는다.*

<br>

#### 2) `flex-basis`
: 부모요소(flex container)의 공간을 배분하기 전, 자식요소(flex item)의 기본 크기를 설정한다. <br>
(flex-direction이 row일 때는 너비, column일 때는 높이를 설정)

```css
.item {
	flex-basis: auto;  /* 기본값 */
	/* flex-basis: 0; */
	/* flex-basis: 50%; */
	/* flex-basis: 300px; */
	/* flex-basis: 10rem; */
	/* flex-basis: content; */
}
```
- Flex Item의 flex-basis가 auto인 경우 width, height 속성이 우선한다.
- Flex Item의 flex-basis가 auto가 아닌 경우, flex-basis 속성이 우선한다.

→ 만약 아이템에 (width를 적용하지 않고) flex-basis: 100px를 적용했을 때
아이템이 100px보다 작다면, 100px로 맞춰지고
아이템이 100px보다 크다면, (100px에 맞추는 것이 아니라) 크기가 그대로 유지된다.
👉 100px로 통일하고 싶다면 flex-basis와 width를 둘 다 설정하면 된다. (flex-basis: 100px , width: 100px)

 


<br>

#### 3) `flex-grow`
: Flex-item들의 flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나눠 가진다.

```css
/* 1:2:1의 비율로 세팅할 경우 */
.item:nth-child(1) { flex-grow: 1; }
.item:nth-child(2) { flex-grow: 2; }
.item:nth-child(3) { flex-grow: 1; }
```

<br>

#### 4) `flex-shrink`

<br>

#### 5) `flex`
: flex-grow, flex-shrink, flex-basis의 축약형 속성

```css
.item {
	flex: 1;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
	flex: 1 1 auto;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
	flex: 1 500px;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: 500px; */
}
```
