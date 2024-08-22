import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "./btn.css";
import "./Skills.css";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';

// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Skills = () => {
    return (
        <div>
            <Header />
            <br></br>
                <main className='skills-container'>
                <h1 className='skills-text'>Skills</h1>
                <div className='skills-card'>
                    <Card sx={{ maxWidth: 500, margin: '0 auto', width: '100%' }}> 
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.servermania.com/kb/KB-MERN-Featured.jpg"
                            alt="tech skills"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <b>Technical Skills</b>
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 500, margin: '0 auto', width: '100%' }}>
                                <b>Front End Technologies:</b> HTML, CSS, JavaScript, React JS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                <b>Back End:</b> Node JS, Express JS<br></br>
                                <b>Database:</b> MongoDB, MYSQL (Basics)<br></br>
                                <b>Deployment:</b> Render, MongoDB Atlas
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <br></br>

                <div className='skills-card'>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://as1.ftcdn.net/v2/jpg/03/54/17/86/1000_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg"
                            alt="web design"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <b>Web Design</b>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I love designs and it's the first step before creating any website as I can give layout to my imagination.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

                <br></br>

                <div className='skills-card'>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid"
                            alt="web development"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web Development
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I am a Full Stack Web Developer (MERN) and have quite some experience in it as well as implemented multiple Projects. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <br></br>

                <div className='skills-card'>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/id/1492377092/photo/magnifier-with-brainstorm-inside-to-smart-idea-creative-thinking-education-innovation-smart.jpg?s=612x612&w=0&k=20&c=OPlp7q4udogoliF4NaBhlzbubQ8k8WrwR1L8eN-fmts="
                            alt="problem solving"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Problem Solving
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I love solving problems whether programming problems or real life problems.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                    <br></br><br></br> <br></br>
            </main>
            <Footer />
        </div>
        
      );
}

export default Skills;