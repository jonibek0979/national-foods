
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Settings from './pages/Settings/Settings';
import Home from './pages/Home/Home';
import NotFound from './pages/404/404';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/*' element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
