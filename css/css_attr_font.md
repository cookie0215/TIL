# [TIL] CSS_font속성

### `font-family : 글꼴 그룹`
- 사용자의 컴퓨터에 지정한 폰트가 없을 때를 대비하여 `,` 로 여러 개의 폰트를 지정
- font-family 작성 시, 마지막에 글꼴 계열을 필수로 입력해 주어야 한다.
    - `p { font-family: -apple-system,BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif; }`  
        → 폰트를 여러 개 명시할 수 있는데 브라우저가 첫번째 명시된 폰트를 확인하고 해당 폰트를 적용할 수 없으면 그 다음에 위치한 폰트를.. 이렇게  하나씩 체크해가면서 적용 가능한 폰트를 찾는다. 지정된 폰트를 모두 적용하지 못하면 명시된 글꼴 계열 중 아무거나 하나를 찾아서 쓰겠다는 의미이다.
- 대표적인 5가지 글꼴 계열
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bd3a633-6ae1-4066-994e-8b6011608986/Untitled.png)
    
<br>

### `font-size : 글자 크기`
- 기본적인 폰트 사이즈는 16px

<br>

| 단위 | 설명 | 비고 |
| --- | --- | --- |
| px | 절대 크기: 모니터상의 한 점 | 사용자가 브라우저를 통해 조정 불가: 낮은 접근성 |
| em | 상대 크기: 바로 윗 부모의 크기에 비례 | 중첩마다 제곱 |
| rem | 상대 크기: 최상위 조상의 크기에 비례 | 일반적으로 body의 글자 크기: 16px |

<br>

```html
<span>바깥쪽 span
    <span>중간 span
      <span>안쪽 span</span>
    </span>
 </span>
```

```css

span { font-size: 24px; }

/*부모요소를 기준으로 글자크기가 비례*/
span { font-size: 1.5em; }

/*최상위기준으로 글자크기 비례*/
span { font-size: 1.5rem; }`
```

<br>

### `font-weight : 글자 굵기`

| 값 | 설명 | 비고 |
| --- | --- | --- |
| 100 ~ 900 | 절대값 | 100 단위로 입력 |
| normal | 일반 굵기 | 400 |
| bold | 두껍게 | 700, 자주 사용됨 |
| lighter, bolder | 상속보다 얇거나 두껍게 | 정도는 상속된 값마다 다름 |

<br>

```css
span { font-weight: 900; }
span { font-weight: bold; }

body { font-weight: 100; }
span { font-weight: bolder; }
```

<br>

### `font-style : 글자 스타일`

| 값 | 설명 | 비고 |
| --- | --- | --- |
| normal | 일반 서체 |  |
| italic | 기울임 | 기울여 쓴 서체 - 주로 사용됨 |
| oblique | 기울임 | 본 서체를 기울인 것 |

<br>

### `font : 위의 font속성을 한꺼번에 작성할 수 있다.`
> font: (`fontWeight`) (`fontSize`)/(`lineHeight`) (`fontFamily`);  
>   ex) p { font: bold 2.4rem/1px "arial" };

<br>

### `letter-spacing : 자간 조정(가로)`

```html
<style>
	span { letter-spacing: 0.1em; }
</style>

<span>자간이 조정된 텍스트</span>
```

<br>

### `line-height : 행간 조절(높이)`
- 한 줄의 높이, 행간과 유사한 개념
(포토샵에서 행간의 의미는 첫째줄과 두번째줄 사이의 간격을 의미, 코드 상에서 행간의 의미는 텍스트가 담겨 있는 line box의 높이를 의미)
- 속성 값
    - normal : 브라우저의 기본 정의를 사용
    - 숫자 : 요소의 **글꼴 크기의 배수**로 지정 ex) line-height: 1.4 → font크기가 16px이라면 line-height는 16px * 1.4 = 22.4px 이 된다.
    - 되도록 지정할 때 배수로 지정하는 것을 권장한다.

<br>

```css
p { line-height: 24px; }
p { line-height: 1.25; }
p { line-height: 1.25em; }
p { line-height: 125%; }
```

### `font : 위의 font속성을 한꺼번에 작성할 수 있다.`
> font: (`fontWeight`) (`fontSize`)/(`lineHeight`) (`fontFamily`);  
>   ex) p { font: bold 2.4rem/1px "arial" };

<br>
<br>