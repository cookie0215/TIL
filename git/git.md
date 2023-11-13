# git Basic

## 설치 확인하기
```
$ git --version
```

## 사용자등록
```
$ git config --global user.email "이메일주소"
$ git config --global user.name "이름"
```

### git config --global --unset 지울요소
: 내가 git에 등록한 이메일 또는 유저 이름 등을 지우고 싶을 때 사용한다.
ex) git config --global --unset user.name

### git clone https주소
github에 만든 repository를 원하는 위치에 생성할 수 있다.


## CLI 명령어

### pwd
현재 작업 위치를 알려주는 명령어 (Print Working Directory)

### ls
현재Directory의 모든 파일들을 보여주는 명령어

### ls -a
.git파일까지 생성되어 있는지 확인이 가능한 명령어

### cd ..
상위 Directory로 이동

### cd 폴더명
원하는 폴더로 이동
하지만 건너뛰어서 들어갈 수 없어서 한칸씩 단계적으로 이동(Change Directory)

### mkdir 폴더명
새로운 폴더를 생성 (Make Directory)

### rm -rf 폴더명
해당 폴더 삭제 (해당폴더 안에 하위폴더가 있으면 모두 삭제됨)

### touch 파일명
빈 파일 생성 (파일안에 내용이 없는 상태를 의미)

### cat 파일명
파일안에 입력된 내용을 텍스트형태로 보여주는 명령어

### rm 파일명
휴지통을 거치지 않고 바로 파일 삭제

### clear
CLI화면에 적힌 코드를 싹 지우고 깨끗한 화면에서 작업할 수 있도록 만드는 명령어


## vim으로 코드작성할때 사용하는 명령어

### vi 파일명
vim안으로 들어오면 normal모드로 들어온다.
- [i] 클릭 : 작성모드(insert모드)로 변경
- [esc] 클릭 : insert모드를 빠져나옴
- shift + [y] : normal모드에서 작성된 코드줄을 복사
- [p] : 복사한 코드를 붙여넣기
- [d] : 코드 한줄씩 지우기
- [u] : 이전단계로 되돌리기
- shift + [:] -> wq! : 저장한 상태로 vim 빠져나오기

** vim으로 작성했다면 반드시 git config --list로 core.editor=vim이 있는지 확인하기
해당코드가 없다면 git config --global core.editor"vim"을 입력해서 core.editor=vim을 추가한다.


## git 명령어

### git status
파일 상태 체크

### git add 파일명
새로 만들거나 수정된 파일을 staging area 에 저장(추가)

### git reset HEAD 파일명
add까지 끝난 상태에서 add했던 파일을 다시 끄집어내고 싶다면(add 안한 상태로 되돌리고 싶을 때) 사용
(만약 commit한 상태를 되돌리고 싶다면 restet대신 revert를 사용하자!!!)

### git commit
- staging area로 온 파일을 repository에 저장하는 명령어
- 커밋메세지 작성하는 단계

> 커밋메시지를 효율적으로 작성하는 방법
> - 제목은 50자 내외로 작성
> - 내용은 아래 type을 이용해 작성
>  - feat : 기능개발 (새로운 기능 추가되었을 때)
>  - fix : 오류 개선 및 버그 수정
>  - docs : 문서 작업
>  - test : test 작업 관련
>  - conf : 환경설정 관련
>  - bulid : 빌드 관련
>  - refactor : 코드 리팩토링 관련 (작동 되던것을 더 잘 되도록 만드는 작업)
**회사에 따라 약간의 차이가 있다.


### git remote
git push전 git remote 명령어를 통해 먼저 원격 저장소가 있는지 확인해준다!
origin이라고 뜨면됨!

### git remote add origin 레파지토리주소
만약 원격저장소가 등록되지 않은 상태라면 해당 명령어를 사용해 원격저장소를 만들어 준다.

### git remote -v
url과 함께 연결된 저장소를  확인할 수 있다.

### git push origin main
원격저장소에 작업한 내용을 업로드 시킬 수 있는 명령어

<br />

> ***`![rejected] main -> main (non-fast-forward)` 에러 발생 시 해결 방법***   
> <br />
> git clone을 먼저 해서 프로젝트를 진행하는 것이 아니라,   
> 프로젝트를 먼저 작업한 뒤, git remote를 통해 github repository에 프로젝트를 넣는 경우    
> `git remote add origin 레포url → git pull origin main → git push origin main` 이렇게 과정이 진행되는데    
> 만약 repository 만들 때 `README.md`파일을 체크하고 만들었다면 push 할 때 계속 에러가 발생하는 것을 볼 수 있다!😥    
> <br />
> 💚 **해결 방법**    
> `git push origin +main` 이렇게 `+` 기호를 붙여서 작성하면 된다!!


<br />
<br />

## 브랜치 생성/삭제/merge

> Branch (브랜치)
: 하나의 파일을 2개의 형태로 독립적으로 유지해서 사용할 수 있는 것

### git branch
브랜치 목록, 현재 가지고 있는 모든 branch를 보여주는 명령어
브랜치목록에 * 표시가 있다면 현재 내가 위치한 브랜치명임을 알려주는 표시

### git branch 새브랜치명
새로운 브랜치 생성(local에 생성됨)

### git checkout 브랜치명
내가 원하는 브랜치로 이동

### git checkout -b 브랜치명
새 브랜치를 만드는 동시에, 새롭게 만들어진 브랜치로 바로 이동

### git branch -d 브랜치명
브랜치를 삭제하는 명령어

### git brnach -m 현재브랜치명 변경할브랜치명
현재브랜치의 이름을 변경할 수 있는 명령어
ex) git branch -m dev test  --> dev라는 브랜치명을 test라고 변경!

### git merge 다른브랜치명
브랜치를 병합하는 명령어(현재 브랜치에 다른 브랜치의 수정사항 병합)

> 내가 새로  만든 브랜치를 main브랜치에 추가하려면
git checkout main (main브랜치에 위치한 상태여야 한다!)
git merger 추가된브랜치명

### git push -u origin 다른브랜치명
새롭게 만든 브랜치로 github저장소에 올리고 싶다면 해당 명령어를 입력하면 된다.
(직접올리지 않는다면 github저장소에는 main브랜치만 존재함!)

### git pull [remote][branch]
원격저장소에 있는 데이터를 내 로컬저장소로 가져오면서 데이터를 최신상태로 바꿔준다.
ex) git pull origin main


## conflict(충돌)
충돌상황에는 여러가지가 있지만, 우선 충돌이 나면 충돌난부분의 코드를 수정해서 살리면된다...!
충돌난 부분을 해결한 후, git add - git commit 진행



