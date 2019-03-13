import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
  <div className='container'>
    <h2>Success!</h2>
    <p>You have successfully signed up.</p>
    <Link to="/">Back to Signup Page Home</Link>
  </div>
)

export default About
