import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Author from './components/Author'
import EditAuthor from './components/EditAuthor';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/api/author" element={<Author></Author>} />
        <Route path="/api/author/update/:id" element={<EditAuthor></EditAuthor>} />
      </Routes>
    </div>
  );
}

export default App;
