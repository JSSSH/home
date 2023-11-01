import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import FreeBoardList from './component/FreeBoardList';
import WriteFreeBoard from './component/WriteFreeBoard';
import FreeBoardDetail from './component/FreeBoardDetail';


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/fblist' element={<FreeBoardList />} />
        <Route path='/fbwrite' element={<WriteFreeBoard />} />
        <Route path='/fbdetail' element={<FreeBoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
