
import './App.css';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from "./components/Home/Home";



function App() {
  return (
    <>
      <Layout>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
