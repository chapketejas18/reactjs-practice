import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import About from './About'

export const Wrapper = () => {
  return (
    <Router>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/youtube">Youtube</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}