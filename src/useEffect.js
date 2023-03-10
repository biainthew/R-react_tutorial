import './useEffect.css'
import { useEffect, useState } from 'react';

function App() {
    const [count, setCount] = useState(1);
    const [input, setInput] = useState('');
    const clickUpdate = () => {
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('λ λλ§ π«')
    },[count]) //μλ¬΄κ²λ μ μ°λ©΄ κ³μ λ λλ§μ΄ μΌμ΄λλ κ² , count λΌκ³  μ°λ©΄ count κ° λ°λλλ§ λ λλ§λ¨
    useEffect(()=>{
        console.log('λ λλ§ π«π«')
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
