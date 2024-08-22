import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "./Education.css";
import "./btn.css";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <div>
            <Header />
            <br></br>
            <main className='edu-container'>
                <h1>Education</h1>	
                <div className='edu-text'>
                	<p>B.Tech | Electronics and Communication Engineering | Vasireddy Venkatadri Institute of Technology</p>
                    <br></br>	
                    <p className='edu-percent'>CGPA: 8.77 | (2019 - 2023)</p>
                </div>
                <div className='edu-text'>
                	<p>Intermediate | MPC | Sri Chaitanya Junior College, Guntur</p>
                    <br></br>	
                    <p className='edu-percent'>CGPA: 9.92 | (2017 - 2019)</p>
                </div>
                <div className='edu-text'>
                	<p>SSC | Auxilium High School, Guntur</p>
                    <br></br>
                    <p className='edu-percent'>GPA: 9.3 | 2017</p>
                </div>
                <button className="styled-button edu-btn">
                    <Link to="/projects" className='btn-text'> Projects <DoubleArrowIcon /> </Link>
                </button>
            </main>
            <br></br>
            <Footer />
        </div>
    )
}

export default Education;