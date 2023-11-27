# fastApi란?
- FastAPI : Python에서 많이 사용되는 프레임워크
- pip : Python 패키지 관리자의 일종

## fastApi 사용 순서
0. `파일명.py` 파일을 만든다.  ex) abc.py  main.py  ...
1. 터미널(파이썬 환경)에서 `$ pip install fastapi` 를 입력해서 fastAPI 를 설치한다.
2. 만든 파이썬 파일에 아래와 같이 코드를 입력한다.
    ```python
    from fastapi import FastAPI

    app = FastAPI()
    @app.get("/")
      def read_root():
      return {"Hello": "World"}
    ```

3. 방금 만든 api를 띄워줄 수 있는 웹서버 생성하기 위해 <br>
   터미널에 `$ pip install uvicorn[standard]` 입력

4. `$ uvicorn [파일명]:app --reload` <br>
    ```terminal
    $ uvicorn abc:app --reload 
    ``` 

    [ ★ ] 터미널에 입력헀을 때 계속 `Error loading ASGI app. Could not import module "abc".` 에러가 발생한 이유.. <br>
    → 실행시키려는 파일 위치를 로드하지 못해서 계속 오류가 났었다. <br>
    [✅] `$ uvicorn 슈퍼코딩.lecture.사전강의.backend.abc:app --reload`

5. 터미널에 `http://127.0.0.1:8000` 이 올바르게 나타나면 ctrl을 누른채, 주소 클릭

6. 로컬 창 생성

7. http://127.0.0.1:8000 주소에 화면에 `{"message":"안녕하세요~ 돌탱입니다>.<"}` 가 나타난다.

    *http://127.0.0.1:8000 주소에 /docs 경로를 입력해주면 현재 어떤 요청과 응답을 실행시키고 있는지 정보를 쉽게 확인할 수 있다.*


#### 연습하기

```python
from fastapi import FastAPI

app = FastAPI()

# hello 경로로 접속했을 때
@app.get("/hello")
def sayHello():
    return {"message" : "안녕하세요~ 돌탱입니다>.<"}

# 기본 root 주소 페이지
@app.get("/")
def sayWelcome():
    return {"message" : "환영합니다! 메인페이지 입니다~"}
```

## index.html 파일을 서버에 연결하는 방법

### 1. index.html 와 main.py 파일을 만든다.
: 여기서 index.html, css, js 파일은 모두 static 이라는 폴더를 만들어서 그 곳에 넣어둔다.
![Alt text](image.png)

### 2. main.py에 fastAPI를 작성한다.

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI()

app.mount("/", StaticFiles(directory='static', html=True), name='static')

```
→ FastAPI를 만들고, root(/)경로에 우리의 static파일에 있는 html을 호스팅 해라라는 의미이다.

<br>

### 3. `$ uvicorn [파일명]:app --reload`
: main.py에 있는 app이라는 객체를 띄울 건데, reload 형식으로 띄워달라는 의미
