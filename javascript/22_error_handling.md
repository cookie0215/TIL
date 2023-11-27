# 에러핸들링
: 개발자는 사용자가 서비스를 이용하는 동안 발생할 수 있는 에러를 미리 사전에 예측하여, 서비스 이용자의 사용 흐름이 막히지 않도록 유도해야 하는 과정을 말한다.

<br>

## 에러핸들링의 의의
발생 상황과 발생 주체에 따라 에러핸들링과 예외핸들링 두가지 종류로 구분된다.

### 에러 핸들링(Error Handling)
- 에러: 컴퓨터가 발생시키는 것 <br>
(컴퓨터가 코드를 실행하는 과정 자체에서 발생하는 에러)

### 예외 핸들링(Exception Handling) 
- 예외: 개발자가 의도적으로 발생시키는 것 <br>

  ex) 개발자가 회원가입 form을 만들 때 비밀번호를 대소문자/특수문자를 활용하도록 규칙을 정해놓았다고 생각해보자.
  해당 규칙에 맞지 않는 비밀번호를 입력했을 때, 에러 메세지가 나타나도록 설정해주는 것으로,
  이것은 컴퓨터상 에러가 아닌 의도적으로 에러를 발생시킨 것으로 볼 수 있다.


<br>

## `try ~ catch`

```javascript
try {
  // 코드...
} catch (err) {
  // 에러 핸들링
}
```

- 잠재적인 에러가 발생할 가능성이 있는 부분에서 `에러를 처리하기 위한 용도로 사용`
- **`try {}`** : 에러가 발생할 가능성이 있는 코드를 넣어둔다.
- **`catch {}`** : 에러가 발생했을 때를 대비한 행동을 넣는다.