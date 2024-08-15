import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Women from './pages/Women';
import Newarrival from './pages/Newarrival';
import Sale from './pages/Sale';
import Customercare from './pages/Customercare';
import Productpage from './pages/Productpage';
import Shoppingbag from './pages/Shoppingbag';
import Searchpage from './pages/Searchpage';
import Notification from './pages/Notification';
import './App.css';
import Header from './components/layout/Header';
import Bottomnav from './components/layout/Bottomnav';
import Footertop from './components/Footertop'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Renders at /app/ */}
        <Route path="/women" element={<Women />} /> {/* Renders at /app/women */}
        <Route path="/Newarrival" element={<Newarrival />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Customercare" element={<Customercare />} />
        <Route path="/Productpage" element={<Productpage />} />
        <Route path="/Shoppingbag" element={<Shoppingbag />} />
        <Route path="/Searchpage" element={<Searchpage />} />
        <Route path="/Notification" element={<Notification />} />
      </Routes>
      <Bottomnav/>
      <Footertop/>
    </BrowserRouter>

  );
}

export default App;