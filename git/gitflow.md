# gitflow을 이용한 협업 순서 정리

### 팀장이 해야할 일
1. github에 repository를 생성
2. git clone 진행
3. 터미널에 git branch 입력 >>> 현재 `main` 브랜치임을 확인
4. git flow init 을 입력
5. git branch 재 입력 >>> main브랜치에서 `develop` 브랜치로 변경됨
6. develop브랜치에 touch abc.js 입력 (파일 생성)
7. touch .gitignore  
  → https://www.toptal.com/developers/gitignore 에서 각 컴퓨터환경에 따라 생기는 캐시파일들 보여준다.  
    해당 캐시파일코드들을 .gitignore파일에 추가한다.
8. git add abc.js
  → 이 때 파일을 add할 때 abc.js파일과 .gitignore파일을  
    각각 따로 git add - git commit 을 진행 한다.
9. git commit
  → add한 abc.js파일의 commit메세지를 feat로 작성
10. git add .gitignore
  → abc.js 파일을 추가 후, 이제 gitignore파일을 추가
11. git commit (.gitignore)
  → conf: set to ignore something with .gigtignore 라는 commit메세지 작성
12. git push -u origin develop
13. 팀장이 팀원에게 repository에 올린 파일을 접근할 수 있도록 만든다.

<br>
<br>

### 팀원이 해야할 일
14. 팀장이 만든 repo로 가서 프로젝트의 issue사항 적기
  → issue사항에는 내가 앞으로 작업할 내용을 작성한다.
15. 해당 프로젝트 오른쪽 상단부에 있는 `folk` 버튼을 클릭
16. 이제 folk한 프로젝트를 clone한다.
  → **반드시 내 아이디가 적힌 해당 프로젝트 (folk한 프로젝트)를 clone할 것!**
17. 프로젝트를 clone했다면 터미널에 git branch를 입력 >>> main브랜치임을 확인
18. git flow init 입력
19. git branch 재 입력 >>> main브랜치에서 `develop` 브랜치로 변경됨
20. git flow feature start 브랜치명 입력
  → develop에 feature브랜치를 만드는 것이고, 이때 feature브랜치를 구분하기 위해서 브랜치명을 작성하는 것이다.
21. 만든 `feture - 새브랜치` 에서 작업 진행
22. git add - git commit 진행
  → 매 commit을 진행할 때마다 github issue에 작성해 놓았던 task를 작업 마칠 때마다 하나씩 체크한다.
  → 작성한 issue사항을 모두 완료(해결)한 상태라면 마지막 commit진행 시, 메세지에  
    **" feat: 제목내용 쓴 뒤, 내용에 resolve #1 "** 이렇게 작성해서 알려주는 것이 좋다!!!
    *(issue를 모두 해결했음을 알려주기 위해 #1 이라고 numbering을 붙이는 것)*
23. git flow feature finish 브랜치명 입력
24. git push -u origin develop 입력
25. github에 해당 프로젝트의 develop브랜치로 가서 `compare&pull request` 버튼을 클릭  
    (이때 반드시 base가 develop인지 확인하기!!!!!)

<br>

---

26. 이때 **팀장**은 팀원이 업로드한 코드를 리뷰 및 코멘트를 요청

---

<br>

27. **팀원**은 팀장이 요청한 comment 작업을 확인 후, 해당 코드를 수정해야하는 상황이 생긴다면  
    push를 마친 뒤, feature branch를 만들어서 해도 되고, 만약 간단한 수정이면 develop에서 바로 해도 된다.
28. 수정내역이 있으면 똑같이 add -commit -push  - pull request버튼 클릭

<br>
<br>

### 팀장이 해야할 일
29. 다시 **팀장**은 팀원이 수정한 코드를 재 확인 후, resolve처리 진행
30. 더이상 수정할 코드가 없다면 **팀장**은 "pull request" 탭에서 해당 코드가 수정할 필요가 없다고  
    [viewed] 라는 버튼을 클릭 + [Review changes] 클릭 > approve 처리를 진행
31.  git fetch origin develop 진행
  → develop이 FETCH_HEAD 라는 임시공간에 담기게 된다.
32. git merge FETCH_HEAD
  → fetch후, 팀장이 merge 진행

<br>
<br>

*여기까지의 과정이 하나의 cycle이다!*

<br>

### 팀원이 해야할 일
33. git remote -v 입력
  → 팀장이 merge한 프로젝트를 받기 전 현재 origin 상태를 확인
34. git remote add upstream **팀장clone주소** 
  → 팀원들이 pull request한 내역들이 팀장이 merge를 하면 팀장의 develop에만 쌓인다.  
    그렇기 때문에 나머지 팀원들도 팀장이 merge를 마치면 **팀장**의 주소를 받아와야한다!!!
35. git remote -v 다시 입력
  → 팀장 주소를 clone 후, 확인해보면 upstream 이 나타나는 것을 볼 수 있다
36. git fetch upstream develop  
  → fetch를 진행하면 develop이 FETCH_HEAD라는 공간으로 들어간것을 볼 수 있다.
  → pull 보단 fetch를 받아서 당겨와야한다. 

37. git merge FECH_HEAD
  → fetch로 당겨온 다음 FETCH_HEAD 를 merge해야 한다.

<br>