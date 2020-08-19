import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Repo from './pages/Repo';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import { store } from './store';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
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
    </Provider>
  );
}

export default App;