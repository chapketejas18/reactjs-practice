import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)
    return () => clearTimeout(timer)
  })
  return <div>About</div>
}

export default About