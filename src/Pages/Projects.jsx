import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '../Components/projectsData';
import "./Projects.css";

const Projects = () => {
  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <Card className="project-card" key={index} sx={{ marginBottom: '30px', width: "70vw", borderRadius: "10px", padding: "10px"}}>
              <CardContent>
                <Typography variant="h5" component="div" className='project-title'>
                  {project.title}
                </Typography>
                <Typography component="div" paragraph className='project-breif'>
                  {project.breif}
                </Typography>
                <div className="tech-stack">
                  <span className='tech-stack-text'>TechStack : </span>
                  {project.techStack.map((tech, idx) => (
                    <Button
                     className='tech-btns'
                      key={idx} 
                      variant="outlined" 
                      size="small" 
                      sx={{ marginRight: '5px', marginTop: '5px', borderRadius: "30px", borderColor: "#333333", color: "#333333"}}
                    >{tech}
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary" 
                  startIcon={<GitHubIcon />} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >GitHub Repo
                </Button>

                <Button
                  className='btn' 
                  size="small" 
                  color="primary" 
                  onClick={() => toggleDescription(index)}
                >{showDescription[index] ? 'Hide' : 'Show'} Description
                </Button>

              </CardActions>
              {showDescription[index] && (
                <CardContent>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    component="div"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </main>
      <br></br><br></br>
      <Footer />
    </div>
  );
};

export default Projects;
