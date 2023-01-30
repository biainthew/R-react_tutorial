import { useState, useRef, useEffect} from "react";


const MovieForm = ({addMovie}) => {
    useEffect(() =>{
        // console.log(inputRef)
        inputRef.current.focus();
    }, []); 

    const inputRef=useRef();   
    const [movieTitle, setMovieTitle]=useState('');
    const [movieYear, setMovieYear]=useState('');
    const [titleError, setTitleError]=useState('');
    const [yearError, setYearError]=useState('');
    
    const validateForm = () => {
        let validate = true;
        if(!movieTitle){
            setTitleError('영화 제목을 입력하세요');
            validate = false;
        }
        if(!movieYear){
            setYearError('개봉 연도를 입력하세요');
            validate = false;
        }
        return validate;
    }
    const resetError = () => {
        setTitleError('');
        setYearError('');
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){
            addMovie({
            id:Date.now(),
            title:movieTitle,
            year:movieYear
            });
            resetError()
        }
        setMovieTitle('');
        setMovieYear('');
        inputRef.current.focus();
    }
    return (
        <form action="#" onSubmit={onSubmit}>
            <input type="text" placeholder="영화제목을 쓰세요" value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}} ref={inputRef}/>
            <div className="error">{titleError}</div>
            <input type="text" placeholder="개봉연도를 쓰세요" value={movieYear} onChange={(e) => {setMovieYear(e.target.value)}}/>
            <div className="error">{yearError}</div>
            <button type="submit">ADD</button>
        </form>
    );
};

export default MovieForm;