# Git & Github
git :   (분산)버전 관리 프로그램
        컴퓨터 SW 관리
        백업, 복구, 협업

github :    포트폴리오
            구글 드라이브 백업요소
            협업 툴 (+gitlab)

 + visual studio code : markup(제목, 요약 등 표시)

    HTML : HyperText Markup Language
    <-> Markdown

Typora

# git 기초
`git init` : 초기화

    > Home 폴더를 git으로 관리하면 절대 안됨

    > 리포에서 또 리포선언 하지말자
    
        > 관리하는 폴더 : Repo(sitory)

git config --global user.name "qoqls1212" 
git config --global user.email "qoqls1212@gmail.com"
> `config` 처음 설정할 때 한번만 쓰는 거라 굳이 안외워도 됨

> touch learn-git.md    lean-git.md 파일 생성
> git `add` learn-git.md  스테이지 올리기
> git `commit` -m '1번'   메모리에 저장
> git `log`               메모리 확인
> git `status`            현재상황 확인
-m을 꼭 남겨야 함 : 변경사항

폴더 -> 리포
> $ git init
리포 -> 폴더
> $ rm -rf .git/

> commit하기
스테이지에 올리기(staging)
$git add <filemname> # 파일 올리기
$git add . # 현재 위치 전체의 변경사항 올리기

> Commit
스테이지에 올라간 변경사항만 커밋에 포함됨
$git commit -m 'commit Message'

> 모니터링
현재상황 확인하기
$ git status
commit 로그 보기 (메모리카드 뒤져보기)
$git log
원격저장소 연결하기
$ git remote add <name> <URL>
$ git remote add origin http://github.com/...
로컬 커밋 원격으로 보내기
$ git push <name> <branch>
$ git push origin master

> github : 드라이브 - 올리기
1. 드라이브(github) 내 사진첩(Remote Repo) 만들기
2. 내컴퓨터의 사진첩(Local Repo)과 연결
$ git remote add origin https://github.com/qogksqls/git-practice.git
3. 동기화
$ git push origin master
*연결 끊기
$ git remote remove [name]

$ git --help

mv : 이름바꾸기, 위치 옮기기
cp : 복사

gitignore.io (ignore불러오기)