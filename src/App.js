import './App.css';
import Navbar from './component/navbar/navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './component/login/login';
import SignUp from './component/signup/signup';
import Home from './component/home/home';
// import SignUp from './components/signup';
// import Login from './components/Login';
// import StudentList from './components/studentList';

function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/user' element={<h1>user</h1>} />
        <Route path='/logout' element={<h1>Logout</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
