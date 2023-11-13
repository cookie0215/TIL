# [TIL] CSS_Transform
Transform은 요소에 이동(translate), 회전(rotate), 확대/축소(scale), 비틀기(skew) 효과를 지정할 수 있다.

<br>
<br>

## Transform  속성들

| 속성값 | 설명 |
| :-- | :-- |
`translate` | 이동
`scale` | 축소/확대
`rotate` | 회전
`skew` | 비틀기

<br>

### `translate(x,y)`
: 해당 요소가 X축으로 X만큼, Y축으로 Y만큼 움직인다.

```css
transform : translate(20px, 10px);
transform : translateX(20%);
transform : translateY(10rem);
```

<br>

### `scale(x,y)`
: 해당 요소를 축소 또는 확대 시킬 수 있다.

```css
transform : scale(0.35, 1.1);
transform : scaleX(2);
transform : scaleY(1.5);
```

<br>

### `rotate(n)`
: 해당 요소를 n만큼 회전시킨다.

```css
transform : rotate(45deg);
transform : rotate(-180deg);
```

<br>

### `skew(x,y)`
: 해당 요소를 X축으로 X각도 만큼, Y축으로 Y각도만큼 기울인다.

```css
transform : skew(45deg, -10deg);
transform : skewX(15deg);
transform : skewY(-10deg);
```

<br>
<br>

*Transform을 중첩해서 사용 할 수 있다.*

```css
tansform : rotate(75deg) translateY(120px)
transform: skew(30deg, 10deg) rotate(45deg);
```