# [TIL] CSS_Transition
transition이란, css 속성 값이 변화할 때 속성값의 변화가 일정 시간에 걸쳐 발생되도록 하는 것을 말한다. <br>
ex) 어떤 요소에 마우스를 올렸을 때, 해당 요소의 크기가 부드럽게 전환되는 효과를 보여줄 때 사용할 수 있다.

## Transition 속성들
> `transition: property duration function delay;` <br>
>  기본값 : all 0 ease 0

| 속성값 | 설명 |
| :-- | :-- | 
`transition` | 모든 transition 속성을 한 줄에 설정할 수 있음 (축약형)
`transition-property` | 요소에 추가할 transition 효과 <속성>
`transition-duration` | transition 효과가 지속될 시간 <기간>
`transition-timing-function` | transition 효과의 시간당 속도 <방식>
`transition-delay` | transition 효과가 나타나기 전까지의 지연 시간 <지연>

<br>

### `transition-property`

<br>

### `transition-duration`
- 전환이 어느정도 지속될 지 설정
- 초 단위(s) 또는 밀리 초 단위(ms)로 지정

<br>

### `transition-timing-function`
- 효과의 변화 흐름, 시간에 따른 변화 속도와 같은 일종의 변화의 리듬
- 아래 기본적인 속성값을 사용해서 transition을 보여줄 수 있고 <br>
또는 cubic bezier [https://cubic-bezier.com/#.17,.67,.83,.67] 에서 그래프를 조정해서 원하는 방식으로 트랜지션을 보여줄 수 있다.


| 속성값 | 설명 |
| :-- | :-- | 
ease | 느리게 시작해 점점 빨라졌다가 느려지면서 종료 *(기본값)*
linear | 시작부터 종료까지 속도가 일정하게 진행
ease-in | 느리게 시작하다가 일정한 속도에 다다르면 그 상태로 등속운동함
ease-out | 일정한 속도로 시작되다가 점점 느려지면서 종료
ease-in-out | 느리게 시작되어 정상속도로 이동하다가 다시 점점 느려지면서 종료


<br>

### `transition-delay`
- 트랜지션이 진행되기 전 대기(지연) 시간
- 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정
