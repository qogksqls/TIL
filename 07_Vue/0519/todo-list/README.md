# todo-list

## CreateTodo
- TodoForm.vue 과 store/index.js에서 작업
> TodoForm
- input태그에 `v-model="todoTitle"` 로 설정
- enter 칠때마다 createTodo 함수 작동
- store에 dispatch로 넘김

> store/index.js
- actions에서 mutations로 commit
- mutations에서 state로 push

## DeleteTodo
- TodoListItem.vue과 index.js에서 작업
> TodoListItem.vue
- button 만들어서 deleteTodo함수와 연결
- index.js로 dispatch

> index.js
- mutations에서 splice(index, length)사용하여 삭제

## updateTodo
- todo.title 클릭할 때 isCompleted만 반전시킴

## getters
- 완료된 Todo 개수 세는 함수
- 미완료된 Todo 개수 세는 함수
- 전체 Todo 개수 세는 함수를 만듬

- App.vue에서 mapGetters로 불러오기 해봄