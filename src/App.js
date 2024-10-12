import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
