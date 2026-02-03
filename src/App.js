import React, { useState } from 'react';

const ValentineCard = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '60%' });

  // Function to move the "No" button to a random position
  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80 + 10) + "%";
    const randomLeft = Math.floor(Math.random() * 80 + 10) + "%";
    setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fce4ec', // Light pink background
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    overflow: 'hidden',
  };

  const cardStyle = {
    padding: '60px',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    position: 'relative',
    minWidth: '350px',
  };

  const buttonStyle = {
    padding: '12px 25px',
    fontSize: '18px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '10px',
    border: 'none',
    transition: 'transform 0.2s',
  };

  if (hasAccepted) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={{ color: '#d81b60' }}>💖 YAY!!! 💖</h1>
          <p style={{ fontSize: '1.2rem' }}>Best decision ever! 🥰</p>
          <img 
            src='/images/GAN passphoto.jpeg'
            alt="Celebrating" 
            style={{ width: '250px', height: '300px', borderRadius: '10px', marginTop: '15px', objectFit: 'cover' }}
          />
          <p style={{ marginTop: '15px', fontWeight: 'bold' }}>I love you ❤️</p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
 <h2 style={{ color: '#333', fontSize: '32px' }}>
  <strong>Bangaram</strong> (Gowri), <br />
  will you be my Valentine? 💕
</h2>


        
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button 
            style={{ ...buttonStyle, backgroundColor: '#e91e63', color: 'white' }}
            onClick={() => setHasAccepted(true)}
          >
            YES
          </button>

          <button 
            style={{ 
              ...buttonStyle, 
              position: 'fixed', // Use fixed or absolute to move it anywhere
              top: noButtonPos.top, 
              left: noButtonPos.left,
              backgroundColor: '#eee',
              color: '#333',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={moveButton}
            onClick={moveButton}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;