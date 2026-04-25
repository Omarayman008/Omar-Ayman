'use client';

import React from 'react';

interface GlitchNameProps {
  name: string;
}

const GlitchName: React.FC<GlitchNameProps> = ({ name }) => {
  return (
    <div className="glitch-wrapper">
      <h1 className="glitch" data-text={name}>
        {name}
      </h1>
      <style jsx>{`
        .glitch-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        }
        .glitch {
          font-size: 5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5rem;
        }
        @media (max-width: 768px) {
          .glitch {
            font-size: 3rem;
            letter-spacing: 0.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GlitchName;
