import logo from './logo.svg';
import './App.css';
import Skywalker from './components/Skywalker';
import People from './components/People';
import Planet from './components/Planet';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Skywalker></Skywalker>
      <Routes>
        <People path="/people/:id" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
