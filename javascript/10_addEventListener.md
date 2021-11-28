# [TIL] 이벤트 리스너


### click 이벤트
- 어떤 요소를 클릭했을 때 발생하는 이벤트

```javascript
document.querySelector("태그명").addEventListener('click', function () {
    실행문;
});
```

<br>

## 키보드 관련 이벤트

<br>

### keydown
- 키보드에서 키를 누를 때 발생하는 이벤트

<br>

### keyup
- 키보드에서 키를 뗄 때 발생하는 이벤트 
ex) input요소에 값이 입력하고 키보드에서 키를 뗄 때, 해당 이벤트가 발생된다.

<br>

```html
<input id="textInput" type="text" placeholder="Click here, then press and release a key.">
<p id="log"></p>
```

```javascript
// input창에 입력 시, keyup이벤트 발생
const textInput = document.getElementById("textInput");
const log = document.getElementById("log");

textInput.addEventListener('keyup', e=>{
    e.preventDefault();

    log.innerHTML = textInput.value;
})
```
