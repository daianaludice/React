# React

<b>장점</b>  <br>

1.빠른 업데이트 ,렌더링 속도 (virtual DOM -> 돔을 직접 수정 X 업데이트해야할 최소한의 부분만 검색,업데이터,렌더링 ) <br>
2.컴포넌트기반 <br>
3.재사용성 <br> 
4.개발기간이 단축 <br>
5.유지보수가 용이 <br>
6.리액트 네이티브 앱 개발이 가능하다. <br>

<b>단점</b> <br>

1. 배워할 것이 많음 ( virtual DOM, JSX, Component,State,Props ) <br>
2. 높은 상태관리 복잡도 ( 상태 관리 라이브러리 활용 리덕스,몹엑스,리코일,주스탠드 등) <br>
<br>
<b>사용법</b> <br><br>
리액트 가져오기 <br> <br>
주의 : 사이트를 배포할 때는 "development.js"를 "production.min.js"로 대체할 것. <br><br>
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>  <br>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script> <br><br>

만든 React 컴포넌트를 실행/가져오기 <br>
<script src="내가 만든 컴포넌트.js"></script> <br>

위와 같은 과정없이 처음부터 리액트로 생성하는 create-react-app 활용하면 된다 <br>
(node.js 와 npm, VSCode 필요) <br>

VSCode의 터미널에서 npx create-react-app my-app 실행 <br>

24.05.05 오류발생 <br>
npm ERR! code ENOENT <br>
npm ERR! syscall lstat <br>
npm ERR! path C:\Users\AHHYUN.SOYOUNG\AppData\Roaming\npm <br>
npm ERR! errno -4058 <br>
npm ERR! enoent ENOENT: no such file or directory 등등... <br>

패키지 설치 과정을 넘어가서 생긴 오류일 가능성이 높다고 한다 <br>

따라서 npm -g install create-react-app 를 해주고 다시 npx create-react-app my-app를 실행한다 <br>

<b>createElement</b> <br><br>
React.createElement( <br>
  type, -> html태그 나 리액트컴포넌트 가 들어간다. <br>
  [props], -> 속성이 들어간다 <br>
  [...children] -> 현재 엘리먼트가 포함하는 자식 엘리먼트<br>
  ) <br>


  

  리액트에서 JSX 사용이 필수는 아니지만 장점이 많기때문에 사용하면 편함! <br>

<h2> JSX의 장점 </h2> 
1. 코드가 간결해짐 <br>
2. 가독성 향상 <br>
3. 버그를 발견하기 쉬움. <br>
4. injection Attacks 방어 <br>
<br>
<br>

=====사용방법======== <br>
기본적으로 javascript 문법은 전부 사용가능하며 + XML/HTML 섞어서 사용가능하다. html사용즁 {} 를 사용해 javascript 문법을 사용할 수 있다. <br>
태그의 속성에 값을 넣는 방법 : "" 사이에 문자열을 넣거나 {}사이에 자바스크립트 코드를 넣으면 된다. <br>
children을 정의하는 방법 : html처럼 상위태그가 하위태그를 둘러싸도록하면 된다.

<br> 주의점 <br>

  jsx 사용시 문자열 부분에 '이 아닌 백틱을 사용해야 한다. (Template literals는 Backtick(`)이라고 부르는 역따옴표 기호사용) <br>
  React 18 에서는 ReactDOM.render를 지원하지않는다. 따라서 const root = ReactDOM.createRoot(document.getElementById('root')); 를 따로 생성하고 그 아래 root.render로 랜더링해야한다. <br>
  

<br>

<h2> Elements </h2>

React.createElement(tyep,[props],[...chlidren]) 형태로 생성된다. <br>

-React elements는 Dom elements의 가상 표현. dom은 많은 정보를 가지고있어서, 무겁고 크다. <br>
-React elements는 자바스크립트 객체 형태로 존재한다. <br>
-Elements 생성후에는 children이나 attributes를 바꿀 수 없다  <br>
모든 react 웹에 필수적으로 들어가는 Root DOM NODE <div id="root"></div> 안에 엘리먼트들이 랜더링된다.  <br>
const element 생성 후 ReactDOM.render (element, document.getElementById('root')); 로 돔 엘리먼트에 element를 랜더링한다. ( 리액트 엘리먼트와 돔 엘리먼트는 별개임을 유의)  <br>
랜더링된 엘리먼트 업데이트하려면? 엘리먼트의 불변성때문에 계속 새 엘리먼트를 생성하여 교체하는것이다.  <br>
<br>

<h2> Components </h2> 
-리액트는 모든 페이지가 컴포넌트로 구성되어 있다. 레고 블록을 조립하듯 컴포넌트들을 모아 개발 <br>
-붕어빵 틀,개념적으로 자바스크립트의 함수와 비슷하다. 입출력이 다르다. <br>
- function 컴포넌트와 class 컴포넌트로 나눌 수 있다. <br>
- 함수 컴포넌트는 간단함. 클래스 컴포넌트는 상속을 받는다. <br>
- 컴포넌트의 이름은 항상 대문자로 시작해야한다! (리액트는 소문자로 시작하는 컴포넌트는 DOM으로 인식하기 때문) <br>
====합성과 추출==== <br>

여러개의 컴포넌트를 합쳐서 여러 컴포넌트를 만드는 것이 합성 <br>
큰 컴포넌트에서 일부를 추출해서 새 컴포넌트를 만드는 것이 추출 -> 재상용성,개발 속도 향상 <br>
컴포넌트를 추출하는 단위를 기준이 없지만, 기능단위로 추출하는 것이 좋다. 또한, 곧바로 재사용이 가능한 컴포넌트가 좋다. <br>



<h2> Props </h2> 
-props 는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체이다. <br>
-값을 변경할 수 없다.-> 변경하려면 새로운 값을 컴포넌트에 전달하여 새로 엘리먼트를 생성해야한다. <br>

**함수가 Pure 하다 = 입력값을 변경하지 않으며,같은 입력값에 대해서는 항상 같은 출력값을 리턴한다. <br>
**함수가 Impure하다 = 입력값을 변경하는 경우. <br>
=====모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줄것!==== <br>
따라서 jsx를 사용하여 함수를 만들때, 문자열 등은 ""으로 바로 넣지만 props의 값을 넣을때 정수,변수,다른 컴포넌트 등이 들어갈 경우 {} 안에 넣어야한다! 물론, 문자열도 넣을 수 있다.










