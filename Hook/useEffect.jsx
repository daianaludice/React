import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter(props) {
   const [count, setCount] = useState(0);
   useEffect(( )=> {
      document.title = `you clicked ${count} times`;
   });
  return (
    <div>
      <p> 총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count+1)}>
        클릭
      </button>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

reportWebVitals();
