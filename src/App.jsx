import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import LoginPage from './pages/Login/LoginPage'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
