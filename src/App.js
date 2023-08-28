// import logo from './logo.svg';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyComponents from './pages/components';
import theme from './assets/theme';
import Home from './pages';
import Containers from './pages/container';
import Grids  from './pages/grids';
import Boxes from './pages/box';
import LiftUp from './pages/lift';
import Reducer from './pages/reducer';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/container" element={<Containers/>} />
      <Route path="/components" element={<MyComponents/>} />
      <Route path="/grid" element={<Grids/>} />
      <Route path="/box" element={<Boxes/>} />
      <Route path="/lift" element={<LiftUp/>} />
      <Route path="/reducer" element={<Reducer/>} />
      
    </Routes>
    </ThemeProvider>
  );
}

export default App;
