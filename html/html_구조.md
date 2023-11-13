# [TIL] HTML 구조

### html구조

```html
<!DOTYPE html>
<html lang="ko">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

</body>
</html>
```


### !DOTYPE html
문서 버전과 타입 선언

### html 태그
문서 전체를 감싸는 태그

### head 태그
문서의 메타 정보를 담는 태그

### body 태그
실제 사용자에게 보여지는 내용을 담는 태그

### lang=""
- 해당 페이지가 주로 어떤 언어를 사용하는지 알려주는 코드
- en은 영문, ko는 한국어를 의미
- 육안으로는 크게 차이를 못느끼지만, 기능상으로 큰 차이가 있다.
ex) 시각장애인분들이 스크린리더기를 읽을때 해당 언어가 무엇인지 파악할 수 있다.

### meta 태그
- 웹 페이지의 보이지 않는 정보를 제공하는데 쓰이는 태그
- 닫는 태그가 존재하지 않음

### meta charset="UTF-8"
html 파일의 인코딩을 알려주는 태그
(인코딩 : 웹브라우저, 컴퓨터의 HTML파일을 웹브라우저에서 표시될 수 있도록 변환하는 처리작업)

### meta name="viewport" content="width=device-width, initial-scale=1.0"
웹 화면뿐만 아니라 모바일환경너비에서도  내용이 알맞게  적용되어 보이도록  만드는 코드

### title
- 웹 페이지의 제목을 나타내는 태그
- 웹페이지 본문에는 보이지 않으며, 브라우저의 탭 등에서 확인
- 검색엔진에서 보여지는 텍스트

### favicon
웹브라우저 주소창에 아이콘 표시되는것


