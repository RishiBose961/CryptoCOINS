import './App.css';
import Home from './Layout/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import View from './Views/View';




function App() {
  return (
    <>

      <div className="container mx-auto px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/views/:id" element={<View />} />
            {/* <Route path="/login" element={<Login />} /> */}
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
