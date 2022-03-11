# git branch
## branch
`$ git branch` : 브랜치 목록 확인
`$ git branch <브랜치 이름>` : 새로운 브랜치 생성
`$ git branch -d <브랜치 이름>` : 특정 브랜치 삭제
`$ git switch <브랜치 이름>` : 다른 브랜치로 이동
`$ git switch -c <브랜치 이름>` : 브랜치 생성과 동시에 이동

## merge(병합)
`$ git merge <병합할 브랜치 이름>`
- merge 하기 전에 일단 다른 브랜치를 합치려고 하는, 즉 메인 브랜치로 switch 해야 함
1. fast-forward
- 앞으로만 이동시킴

2. 3-way merge (merge commit)
- 공통된 조상, 현재 master 최신 commit, 다른 브랜치의 최신 commit
- 별도의 새로운 commit을 만들어 냄

3. merge conflict
- merge하는 두 브랜치에서 같은 파일의 같은 부분을 동시에 수정하고 merge하면, git은 해당 부분을 자동으로 merge 해주지 못함.
- 반면 동일 파일이러라도 서로 다른 부분을 수정했다면 conflict 없이 자동으로 merge commit 된다.
-> merge했을 때 충돌 된 곳들 그냥 다 지우고 새로 만들어라
-> 그리고 commit 할 때 별도의 메세지 쓰지 마라(-m 하지마라) 그리고 `esc` + `:wq` 쓰고 탈출

### 다른 명령어
`$ git log --oneline (--all)` : commit한 것들 한줄로 보임
`$ git log --oneline (--all) (--graph)` : commit한 것들 가지까지 보임

### `checkout`
- `checkout` = `switch` + `restore`
- `checkout`은 옛날 버전, 사용이 중복되는 경우가 많아서 `switch`와 `restore`로 나뉘어짐
- `restore`: restore working tree files
