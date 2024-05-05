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
