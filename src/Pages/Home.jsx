import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import About from './About';
import Skills from "./Skills";
import Education from './Education';
import Projects from "./Projects";
import "./Home.css";
import "./btn.css";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Header />
      <main className='home-main'>
        <div className="home-container">
          <div className="text-content">
            <h1>Hello, It's me Shaik Apsarunnisa</h1>
            <h3>-MERN Stack Developer</h3>
            <p>I specialize in building responsive and impactful web applications using the MERN stack. I'm passionate about creating clean, efficient, and user-friendly solutions.</p>
            <br></br>
            <p className='tagline'><i>Crafting the Future of Web – Where Every Pixel Tells a Story</i></p>
            <br></br><br></br>
            <button className="styled-button">
              <Link to="/about" className='btn-text'> About <DoubleArrowIcon /> </Link>
            </button>
          </div> 
        </div>
      </main>
      <About />
      <Skills />
      <Footer />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;
