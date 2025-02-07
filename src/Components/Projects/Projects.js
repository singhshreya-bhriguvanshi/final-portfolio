import React from 'react';
import Project from './Project';
import './Projects.css';
import Rentalhub from './Images/digital dashboard.png';
import FreshFruitHub  from './Images/pinterest clone.png';
import Rentify  from './Images/spam detector.png';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of the projects I've been working .
          </p>
        </div>
        <div className="projects-wrapper">
         

          
          <Project
            title="Pinterest Clone"
            img={FreshFruitHub}
            tech="html js css react node"
            // link="https://fresh-fruit-hub.onrender.com/"
            // repo="https://github.com/MIHIR2006/Fruit-hub"
          >
            <small style={{ color: 'white' }}>
              Built using MERN stack.
            </small>
            <p>
            "Pinterest Clone, a dynamic React-based image-sharing platform, redefines visual discovery and inspiration. As the developer, I've blended aesthetics with functionality to craft a seamless, engaging experience. Users can explore, save, and organize images effortlessly, enjoying a modern and intuitive interface designed for creativity and content curation."
            </p>
          </Project>

          <Project
            title="Digital Dashboard Website"
            img={Rentalhub}
            tech="html css js"
            link="https://singhshreya-bhriguvanshi.github.io/Mini-Project/current/index.html"
            repo="https://github.com/singhshreya-bhriguvanshi/Mini-Project"
          >
            <small>
              Built using HTML5,JavaScript and CSS.
            </small>
            <p>
            "Digital Dashboard Hub, a sleek and interactive React-based web app, streamlines daily activities with essential tools like a calendar, clock, weather updates, to-do list, calculator, social links, mini-games, motivational quotes, currency converter etc. Designed for productivity and convenience, it offers a seamless, modern, and user-friendly experience."
            </p>
          </Project>

          
          <Project
            title="Spam Detector"
            img={Rentify}
            tech="python"
            link="https://github.com/singhshreya-bhriguvanshi/Spam-Detector"
            repo="https://github.com/singhshreya-bhriguvanshi/Spam-Detector"
          >
            <small>
              Built python and kaggle.
            </small>
            <p>
            "SMS Spam Detector, an AI-powered web app, leverages BERT for real-time text classification, distinguishing spam from legitimate messages with high accuracy. Built with Python and Gradio, it ensures a seamless user experience. Designed for security and efficiency, it helps users filter unwanted messages effortlessly, enhancing communication clarity and reliability."
            </p>
          </Project>
          
        </div>
        <div className="heading">
          <h3 className="title">My Experience</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of the internships and responsibilities I've taken on.
          </p>
        </div>
        <div className="projects-wrapper">
         

          
          <Project
            title="Infosys Sprinboard Internship"
            img={FreshFruitHub}
            tech="python"
            // link="https://fresh-fruit-hub.onrender.com/"
            // repo="https://github.com/MIHIR2006/Fruit-hub"
          >
            <small>
              AI/ML Internship.
            </small>
            <p>
            "At Infosys, I gained hands-on experience in software development and AI/ML applications. I worked on industry-level projects, enhancing my coding and problem-solving skills. As part of my learning, I built a language translator using MarianMTModel and MarianTokenizer, enabling accurate English-French translations. This project highlights my expertise in NLP and model deployment."
            </p>
          </Project>

          <Project
            title="HCL Tech Internship"
            img={Rentalhub}
            tech="python"
            link="https://singhshreya-bhriguvanshi.github.io/Mini-Project/current/index.html"
            repo="https://github.com/singhshreya-bhriguvanshi/Mini-Project"
          >
            <small>
              Data Analysis Internship.
            </small>
            <p>
            "As a data analysis intern at HCL, I work on real-world projects involving data-driven solutions, enhancing my analytical, problem-solving, and technical skills. Additionally, I am developing a TRAM data analysis project that integrates AI, automation, and analytics to optimize tram operations, showcasing my expertise in AI/ML and real-time data processing."
            </p>
          </Project>

          
          <Project
            title="Pragati Cohort 2 program"
            img={Rentify}
            tech="python"
            link="https://github.com/singhshreya-bhriguvanshi/Spam-Detector"
            repo="https://github.com/singhshreya-bhriguvanshi/Spam-Detector"
          >
            <small>
              A 12 week program
            </small>
            <p>
            "Completed a 12-week program at Pragati Infosys, attending lectures on workplace ethics, database management systems (DBMS), and other essential industry topics. This program enhanced my understanding of professional conduct, data management, and best practices in the tech industry."
            </p>
          </Project>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;


