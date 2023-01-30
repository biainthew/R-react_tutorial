import './useEffect.css'
import { useEffect, useState } from 'react';

function App() {
    const [count, setCount] = useState(1);
    const [input, setInput] = useState('');
    const clickUpdate = () => {
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('렌더링 💫')
    },[count]) //아무것도 안 쓰면 계속 렌더링이 일어나는 것 , count 라고 쓰면 count 가 바뀔때만 렌더링됨
    useEffect(()=>{
        console.log('렌더링 💫💫')
    },[input])
    const inputUpdate = (e) => {
        setInput(e.target.value)
    }
  return (
    <div>
        <button onClick={clickUpdate} className='btn'>Update</button>
        <span>count: {count}</span>
        <input type="text" value={input} onChange={inputUpdate} />
        <span>{input}</span>
    </div>
  );
}

export default App;
