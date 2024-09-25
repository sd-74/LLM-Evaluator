import React from 'react';
import Sumanth from '../assets/png/Sumanth.jpg'; // Replace with actual images if different
import Chidera from '../assets/png/Chid.jpg';
import Shubham from '../assets/png/Sumanth.jpg';
import Srihas from '../assets/png/Srihas.jpg';

function MeetTheTeam() {
  return (
    <div>
      <h2>Meet the Team</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Sumanth */}
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Sumanth} 
            alt="Sumnanth Kalluru"  
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
          />
          <p>Sumanth Kalluru</p>
        </div>
        
        {/* Chidera */}
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Chidera} 
            alt="Chidera Ibe" 
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
          />
          <p>Chidera Ibe</p>
        </div>

        {/* Shubham */}
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Shubham} 
            alt="Shubham Dey" 
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
          />
          <p>Shubham Dey</p>
        </div>

        {/* Srihas */}
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Srihas} 
            alt="Srihas Rao" 
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
          />
          <p>Srihas Rao</p>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
