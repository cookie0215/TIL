# [TIL] JS_얕은 복사와 깊은 복사
*얕은 복사와 깊은 복사 모두 기존의 객체에 영향을 주진 않고,*  
*단지 어느 수준까지 복사를 할 수 있는지를 보여 준다.*


<br />

### 얕은 복사 (Shallow Copy)
- 객체의 얕은 복사는 객체를 프로퍼티 값으로 갖는 객체의 경우 **한 단계(1 depth)까지만 복사**하는 것

<br />

```javascript
const user = {
	name: 'cookie',
	age: 85,
	emails: ['abc1234@gmail.com']
}

const copyUser = user;

console.log(copyUser);
// {{name: 'cookie', age: 85, emails: Array(1)}

console.log(copyUser === user);     // true

user.age = 20;
console.log(user); 
// {name: 'cookie', age: 20, emails: Array(1)}

console.log(copyUser);
// {name: 'cookie', age: 20, emails: Array(1)}

```

<br />
<br />

### 깊은 복사
- 참조값 (메모리 주소)를 복사
- 만약 객체에 중첩된 객체로 되어 있다면 중첩된 내용까지 모두 복사하는 것을 의미


<br />
<br />

## 객체의 복사 방법

### 1. Object.assign() 메서드를 사용한 복사

<br />

### 2. 전개 연산자 (스프레드 연산자)를 사용한 복사

<br />

### 3. lodash의 cloneDeep() 사용한 복사
- 깊은 복사를 실행한다!

<br />