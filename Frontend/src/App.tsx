import { Routes, Route } from 'react-router-dom'
import {useState} from "react";
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material'
import Home from './pages/Home'
import LanguageContext from './contexts/LanguageContext';
import SettingsPage from './pages/Settings';

function App() {
  type Language = "en" | "es" | "da" |"nl" | "fil" | "fr"|"de" | "hi" | "it"|"ja" | "zh" | "pt"| "ru" | "ar";

  const [language, setLanguage] = useState<Language>("en");


  return (
    <LanguageContext.Provider value={language}>
    <Box className="min-h-screen bg-gray-50">
      <AppBar position="static" elevation={0} className="bg-white shadow-sm">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="text-gray-800">
            Fish or Fiction
          </Typography>
        </Toolbar>

      </AppBar>


      <Container maxWidth="lg" className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/settings" element ={<SettingsPage title="Settings Page" menu="sidenav"/>}/>
        </Routes>
      </Container>

    </Box>

    </LanguageContext.Provider>
  )
}

export default App
