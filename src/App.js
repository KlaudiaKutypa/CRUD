
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<Add />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
