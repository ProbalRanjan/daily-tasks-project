import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import MyCalendar from './Pages/MyCalendar/MyCalendar';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ToDoList from './Pages/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/todoList' element={<ToDoList />} />
        <Route path='/calender' element={<MyCalendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;