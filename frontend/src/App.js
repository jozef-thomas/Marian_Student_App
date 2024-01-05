
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ViewStudent/>}/>
      <Route path='/add' element={<AddStudent/>} />
    </Routes>
    </>
  );
}

export default App;
