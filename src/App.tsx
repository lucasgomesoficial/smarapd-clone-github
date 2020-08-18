import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/overview" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          {/* <Route path="/repositories" element={<Repo />} /> */}
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>
      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;