import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = ({ mode = 'overworld' }) => {
  return (
    <div className={`minecraft-about ${mode}`}>
      <h1 className="minecraft-section-title">ABOUT ME</h1>
      
      <div className="minecraft-about-container">
        <div className="minecraft-about-scroll">
          <div className="minecraft-scroll-content">
            <h3>WHO AM I?</h3>
            <p>
              I'm Chidananda Singh A, (chida) cause the full too long. I do random stuff with code. Fuck it we ball mentalilty or I learn by doing for in formal way. You must be thinking why the "f bomb" but this is my site (hehehehehe)
            </p>
            
            <h3>MY JOURNEY</h3>
            <p>
              It was pretty long. You dont even read this why bother, but for the folks who are actually reading it, I loved tinkering with my old ass P.C which led me to pirate and play games like CS 1.6 or minecraft or things that would run on the ancient P.C. From there I got into tech and here are we are.
            </p>
            
            <h3>WHAT I DO</h3>
            <p>
             I'll do whatever you ask me to (20 dollars is 20 dollars), but please pay me. I dont want to work for free. 
            </p>
            
            <h3>WHEN NOT CODING</h3>
            <p>
              I clean my workspace, find ways to blow up more money on clothes, do random shit, watch youtube, play games like Valorant (and there goes the attention, trust me I am good at it). 
            </p>
          </div>
        </div>
        
        <div className="minecraft-about-education">
          <div className="education-header">
            <div className="education-icon"><img src="/assets/minecraft_creeper_banner_pattern.png" alt="" /></div>
            <h3>SIDE QUESTS</h3>
          </div>
          
          <div className="education-content">
            <a 
              href="https://www.dsce.edu.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Bachelor of Computer Science and Design</div>
              <div className="education-school">Dayananda Sagar College Of Engineering</div>
            </a>
            
            
            <a 
              href="/Certifications/Udemy_Full_Stack.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Web Development Certification</div>
              <div className="education-school">Udemy</div>
            </a>

            <a 
              href="/Certifications/Udemy-go-lang.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Go Programming Language</div>
              <div className="education-school">Udemy</div>
            </a>

            <a 
              href="/Certifications/1ds22cg017_ChidanandaSingh_CAD_1stAttempt.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Computer Aided Design (CAD)</div>
              <div className="education-school">Service Now</div>
            </a>

            <a 
              href="/Certifications/1ds22cg017_Chidananda Singh_CSA_2ndAttempt.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Computer System Architecture (CSA)</div>
              <div className="education-school">Service Now</div>
            </a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
