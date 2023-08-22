'use client';

/*import React, { useState } from 'react';

const Window = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setIsMinimized(false);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleDrag = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const windowStyles = {
    position: 'absolute',
    top: position.y,
    left: position.x,
    width: isMaximized ? '100%' : '500px',
    height: isMaximized ? '100%' : '500px',
    background: 'white',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  };

  return (
    <div style={windowStyles} onDrag={handleDrag}>
      <div>
        <button onClick={handleClose}>Close</button>
        <button onClick={handleMaximize}>Maximize</button>
        <button onClick={handleMinimize}>Minimize</button>
      </div>
      <div>
        Window Content
      </div>
    </div>
  );
};

export default Window;*/

import React, { useState } from 'react';
import Tabs from './Tabs';

const Window = ({ children }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setIsMinimized(false);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleDragStart = (event) => {
    setIsDragging(true);
  };

  const handleDragEnd = (event) => {
    setIsDragging(false);
  };

  const handleDrag = (event) => {
    if (isDragging) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  const windowStyles = {
    position: 'absolute',
    top: position.y,
    left: position.x,
    width: isMaximized ? '100%' : '500px',
    height: isMaximized ? '100%' : '500px',
    background: 'white',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1,
    userSelect: 'none',
  };

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    background: '#ccc',
    cursor: 'move',
  };

  return (
    <div style={windowStyles}>
      <div
        style={headerStyles}
        onMouseDown={handleDragStart} // Hinzufügen des onDragStart-Handlers
        onMouseUp={handleDragEnd} // Hinzufügen des onDragEnd-Handlers
        onMouseMove={handleDrag} // Hinzufügen des onDrag-Handlers
      >
        <div>Fenster-Titel</div>
        <div>
          <button onClick={handleClose}>Close</button>
          <button onClick={handleMaximize}>Maximize</button>
          <button onClick={handleMinimize}>Minimize</button>
        </div>
      </div>
      <div>
                {children}
        <Tabs />
      </div>
    </div>
  );
};

export default Window;
