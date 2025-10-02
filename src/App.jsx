import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Option from './pages/Option'
import Form from './pages/Form'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Templates from './pages/Templates'
import Deployment from './pages/Deployment'
import Success from './pages/Success'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Feedback from './pages/Feedback'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/deployment" element={<Deployment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  )
}

export default App
