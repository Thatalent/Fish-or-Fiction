import { Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Home from './pages/Home';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Box className="m-0 min-h-screen bg-gray-50 p-0">
        <Routes>
          <Route
            path="/"
            element={<Home handleMenuToggle={handleMenuToggle} />}
          />
        </Routes>
      </Box>
      <Menu isOpened={isMenuOpen} title={'Test'}>
        <button></button>
      </Menu>
    </>
  );
}

export default App;
