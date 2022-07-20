import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api" element={<><Form/><AllProducts /> </>} />
        <Route path="/products/:id" element={<OneProduct></OneProduct>} />
      </Routes>
    </div>
  );
}

export default App;
