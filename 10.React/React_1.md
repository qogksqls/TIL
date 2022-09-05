# React

## 설치 및 실행

```textile
npx create-react-app [프로젝트 명]

npm start
```

## 수정

### index.js => 입구 파일

```textile
App.js 내용을 편집해 가면서 UI 제작

App.css

html은 public 폴더의 index.html
```

## 배포

```textile
npm run build -> 배포판을 만드는 과정, build폴더 생성

npx serve -s build -> 개발환경 버전이 아니고 서비스 사용 버전이 만들어짐
```

## Component

```javascript

function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>welcome</h2>
    Hello, WEB
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
```

## Props

```javascript
function Header(props) {        // 보통 props라는 파라미터로 받음
  return <header>               // 객체로 날아온다.
    <h1><a href="/">{ props.title }</a></h1>    // 중괄호로 지
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{ props.title }</h2>
    { props.body }
  </article>
}

function App() {
  const topics = [
    {id:1, title: 'html', body: 'html is ...'},
    {id:2, title: 'css', body: 'css is ...'},
    {id:3, title: 'js', body: 'js is ...'},
  ]
  return (
    <div>
      <Header title="WEB"></Header>        // app의 태그 안에 title 지정
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
```

## event

```javascript
function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();  // click 해도 reload 되지 않음
      props.onChangeMode();
    }}>{ props.title }</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  const topics = [
    {id:1, title: 'html', body: 'html is ...'},
    {id:2, title: 'css', body: 'css is ...'},
    {id:3, title: 'js', body: 'js is ...'},
  ]
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{  // onChangeMode 라는 prop을 함수로 전달
        alert('header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
```

## State


