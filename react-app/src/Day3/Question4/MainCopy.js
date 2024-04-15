import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'
import { createContext, useState } from 'react'
import AuthenticationPage from './AuthenticationPage'

export const MyContext = createContext()
export const MainCopy = () => {
  const [auth, setAuth] = useState({ username: '', password: '' })
  return (
    <MyContext.Provider value={{ auth, setAuth }}>
      <Router>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route element={<AuthenticationPage />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<About />} path="/about" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </MyContext.Provider>
  )
}
