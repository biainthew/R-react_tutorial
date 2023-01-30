import './App4.css';
import {useRef, useState} from 'react';

function App() {
    // const ref = useRef();
    // console.log(ref)
    const [count, setCount]=useState(0);
    const countRef = useRef(0); // 렌더링을 시키지 않고 사용해야 할 때 사용
    // console.log(countRef)
    console.log('렌더링')
    const countUpState = () => {
        setCount(
            count+1
        )
    }
    const countUpRef = () => {
        countRef.current+=1
    }

    return(
        <div>
            <p className='state'>State : {count}</p>
            <p className='state'>Ref : {countRef.current}</p>
            <button className="btn" onClick={countUpState}>State Up</button>
            <button className="btn" onClick={countUpRef}>Ref Up</button>
        </div>
    )

}

export default App;
