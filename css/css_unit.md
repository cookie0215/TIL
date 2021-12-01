# [TIL] CSS_단위


### `px` (픽셀)
- 화면에 출력할 수 있는 점의 단위

<br>

### `%`  (퍼센트)
- 부모 요소를 기준으로 몇 %의 크기를 가지는 지, 상대적으로 백분율 형태로 나타내는 단위

<br>

### `em` 
- 하나의 요소가 갖고 있는 글꼴의 크기를 기준으로 하는 단위
  → 일반적으로 요소에  *font-size를 지정해주지 않으면 기본적으로 **16px**의 글자 크기를 갖는다*

<br>

***[예제1] child요소 width가 10em일 때, 몇 px인가?***

```html
<!--css-->
<style>
.parent {
  width: 300px;
  height: 200px;
  background: gold;
}

.child {
  width: 10em;    /* 너비가 160px임을 알 수 있다. */
  min-height: 50%;
  background: blue;
}
</style>

<!--html-->
<div class="parent">
  <div class="child"></div>
</div>
```

child 요소의 너비가 10em이라는 것은 10em * 16px = 160px이다.  
→ 왜냐하면 em단위는 하나의 요소가 갖고 있는 글꼴의 크기를 기준으로 한다.
현재 child요소의 font-size를 따로 지정하지 않았기 때문에  
defalut값인 16px을 10em에 곱하면 160px인 것을 알 수 있다.  

그런데 만약 parent요소에 글자 크기 10px를 지정한다면 어떻게 될까?

<br>

***[예제2] parent요소에 font-size를 지정 후, child요소의 width가 10em일 때, 몇 px인가?***

```html
<!--css-->
<style>
.parent {
  width: 300px;
  height: 200px;
  background: gold;
  font-size: 10px;
}

.child {
  width: 10em;    /* 너비가 100px임을 알 수 있다. */
  min-height: 50%;
  background: blue;
}
</style>

<!--html-->
<div class="parent">
  <div class="child"></div>
</div>
```

child요소에는 직접적으로 font-size를 지정하지는 않았지만,  
parent요소에 지정한 font-size가 자식 요소에게까지 상속되면서 child요소의 font-size 역시 10px이 되는 것이다.  

→ 그렇기 때문에 child요소의 width값은 10em * 10px = 100px 이 된다!!

<br>

### `rem` : 루트 요소 (=최상위 요소, html)의 글꼴 크기가 기준

<br>

***[예제] child요소의 width가 10rem일 때, 몇 px인가?***

```html
<!--css-->
<style>
html { font-size: 16px; }
.parent {
  width: 300px;
  height: 200px;
  background: gold;
  font-size: 10px
}

.child {
  width: 10rem;    /* 너비가 160px임을 알 수 있다. */
  min-height: 50%;
  background: blue;
}
</style>

<!--html-->
<div class="parent">
  <div class="child"></div>
</div>
```

rem단위는 최상위 (루트)요소인 html의 font-size에만 영향을 받기 때문에  
parent요소의 font-size가 10px이여도, child요소의 width는 10rem * 16px = 160px이 되는 것이다!  

<br>

### **vw**  : 뷰포트의 가로 너비의 백분율 (1/100)

<br>

### **vh** : 뷰포트의 세로 너비의 백분율 (1/100)

<br>

```html
<!--css-->
<style>
html { font-size: 16px; }
.parent {
  width: 300px;
  height: 200px;
  background: gold;
  font-size: 10px
}

.child {
  width: 50vw;    /* 브라우저 화면 전체 가로 너비 중 절반만큼 가로 너비를 차지함. */
  min-height: 50vh;   /* 브라우저 화면 전체 세로 너비 중 절반만큼 세로 너비를 차지함. */
  background: blue;
}
</style>

<!--html-->
<div class="parent">
  <div class="child"></div>
</div>
```

<br>
<br>   

***[문제] 0px과 0vw 중에 더 큰 값은 어떤 것일까?***

→ 둘다 동일하다.

왜냐하면 0 이라는 값은 양수로 입력할 수 있는 값 중 가장 최소의 값이기 때문에, 
입력하는 단위에 전혀 상관없이 0이라는 값은 모두 같다.

<br>