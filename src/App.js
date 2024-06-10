import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import SearchFriend from './components/SearchFriend';
import DeleteFriend from './components/DeleteFriend';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route>
    <Route path='/' element={<AddFriend/>}/>
    <Route path='/search' element={<SearchFriend/>}/>
    <Route path='/delete' element={<DeleteFriend/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>

        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
