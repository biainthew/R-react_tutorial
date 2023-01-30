import './App2.css';
import Navbar from './component/NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Moives';
import Users from './pages/Users';
import Footer from './component/footer';


function App(){
  return(
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} /> {/* main page 만 /  사용 , index.html 같은 느낌 */}
            <Route path='movies' element={<Movies/>} />
            <Route path='users' element={<Users/>} />
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;