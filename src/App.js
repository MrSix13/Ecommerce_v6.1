import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
