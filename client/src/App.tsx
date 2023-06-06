import './App.scss'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </nav>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<HomePage />} />
				<Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
