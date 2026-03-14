import React, { useState, useRef } from 'react';

const ProjectCard = ({ title, description, tags, id }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    // Calculate rotation percentage (-1 to +1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="project-card glass-morphism"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${rotation.x || rotation.y ? '-8px' : '0px'})`,
        transition: rotation.x === 0 && rotation.y === 0 ? 'transform 0.5s ease-out' : 'initial'
      }}
    >
      <div className="project-image-placeholder mono">
        <div className="glitch-box">
          DATA_STREAM::PRJ_0{id}
        </div>
      </div>
      <div className="project-info">
        <div className="project-meta mono">PROTOCOL: {id}</div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag mono">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
