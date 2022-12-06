import './pages/App.css';
import Public from './pages/Public';
import Admin from './pages/Admin';
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  

  return ( //jsx
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      
      <article className='konyvek'>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Public />} />
                        <Route path="admin" element={<Admin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
      </article>
      <footer className='lablec'>
        <p>én</p>
      </footer>
    </div>
  );
}

export default App;
