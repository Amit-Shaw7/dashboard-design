import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { DashBoard } from './pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<DashBoard />} />
        <Route exact path='/dashboard' element={<DashBoard />} />
        <Route exact path='/product' element={<DashBoard />} />
        <Route exact path='/help' element={<DashBoard />} />
        <Route exact path='/customers' element={<DashBoard />} />
        <Route exact path='/income' element={<DashBoard />} />
        <Route exact path='/promote' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
