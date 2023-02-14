
import './App.css';
import Home from './components/Home';
import {HashRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/edit/:campid' element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
