import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = ({ mode = 'overworld' }) => {

  return (
    <div className={`home-container ${mode}`}>
      {/* Main Title */}
      <motion.div
        className="title-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="minecraft-title">
          I'M CHIDA
        </h1>
      </motion.div>
    </div>
  );
};

export default Home;