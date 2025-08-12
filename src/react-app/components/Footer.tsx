import React from 'react';
import reactLogo from '../assets/react.svg';
import honoLogo from '../assets/hono.svg';
import cloudflareLogo from '../assets/Cloudflare_Logo.svg';
import viteLogo from '/vite.svg';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <p>
        Powered by{' '}
        <span className="tech-stack">
          <img src={viteLogo} alt="Vite" className="tech-icon" />
          Vite
        </span>
        {', '}
        <span className="tech-stack">
          <img src={honoLogo} alt="Hono" className="tech-icon" />
          Hono
        </span>
        {', '}
        <span className="tech-stack">
          <img src={cloudflareLogo} alt="Cloudflare Workers" className="tech-icon cloudflare-icon" />
          Cloudflare Workers
        </span>
      </p>
    </footer>
  );
};

export default Footer;