import { Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Home from './pages/Home';

import { useState } from 'react';
import SettingsMenu from './components/SettingsMenu';
import HelpMenu from './components/HelpMenu';

function App() {
  type MenuType = 'help' | 'settings' | null;

  const [activeMenu, setActiveMenu] = useState<MenuType>(null);

  const toggleMenu = (menu: MenuType) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const handleSettingsMenuToggle = () => {
    toggleMenu('settings');
  };

  const handleHelpMenuToggle = () => {
    toggleMenu('help');
  };

  return (
    <>
      <Box className="m-0 min-h-screen bg-gray-50 p-0">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSettingsMenuToggle={handleSettingsMenuToggle}
                handleHelpMenuToggle={handleHelpMenuToggle}
              />
            }
          />
        </Routes>
      </Box>

      <SettingsMenu isMenuOpen={activeMenu === 'settings'} />
      <HelpMenu isMenuOpen={activeMenu === 'help'} />
    </>
  );
}

export default App;
