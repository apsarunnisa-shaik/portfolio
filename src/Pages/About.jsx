import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./About.css";
import "./btn.css";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='about-container'>
          <h1>About Me</h1>
          <br></br>

          <p>I hold a B.Tech degree from Vasireddy Venkatadri Institute of Technology. I specialize in MERN Stack Development, with a strong foundation in JavaScript and a commitment to building responsive and user-friendly web applications.</p>
          <br></br>

          <p>What excites me the most about web development is the endless possibilities to solve real-world problems through code. I ensure that every project I work on delivers an excellent user experience. I am particularly interested in leveraging my skills to create impactful applications that make a difference. I've completed multiple projects, from a fully functional Airbnb-like platform to weather information apps, all of which reflect my dedication to learning and applying the latest technologies.</p>
          <br></br>

          <p>Currently, I am focused on securing a position as a MERN Full Stack Developer. I aim to work in dynamic environments where I can continue to grow, collaborate with like-minded professionals, and contribute to innovative projects.</p>
          <br></br>

          <div className='about-btns'>
            <button className="styled-button">
              <Link to="/skills" className='btn-text'> Skills <DoubleArrowIcon /> </Link>
            </button>
            <br></br>

            <button className="styled-button">
              <Link to="/projects" className='btn-text'> Projects <DoubleArrowIcon /> </Link>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
