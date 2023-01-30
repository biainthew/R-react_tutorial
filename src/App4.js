import './App4.css';
import {useRef} from 'react';
import { useEffect } from 'react';

function App() {
    const inputRef = useRef();
    useEffect(()=>{
        console.log(inputRef)
        inputRef.current.focus();
    },[])
    const login = () => {
        alert(`hi ${inputRef.current.value} 님`)
    }
    return(
        <div>
            <input type="text" placeholder='이름을 입력하세요' ref={inputRef} />
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default App;
