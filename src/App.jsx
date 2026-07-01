import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Landing from './pages/Landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/landing' element={<Landing />} />
    </Routes>
  )
}

export default App