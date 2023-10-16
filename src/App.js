
import './App.css';
import Edit from './Components/Edit';
import Home from './Components/Home';

import Add from './Components/Add'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
  <Router>

    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/edit'element={<Edit/>}/>
  <Route path='/add'element={<Add/>}/>
  </Routes>
  </Router>
    </div>
  );
}

export default App;
