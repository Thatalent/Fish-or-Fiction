import { Routes, Route } from 'react-router-dom'
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material'
import Home from './pages/Home'
import QuestionAutoRoute from './components/QuestionAutoRoute'
import QuestionPage from './components/QuestionPage'

function App() {
  return (
    <Box className="min-h-screen bg-gray-50 p-0 m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/question' element={<QuestionAutoRoute/>}/>
          <Route path="/question/:id?" element={<QuestionPage/>}/>
        </Routes>
    </Box>
  )
}

export default App
