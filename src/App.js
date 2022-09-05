import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Vote from './components/Vote';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App body">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/vote' element={<Vote></Vote>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
