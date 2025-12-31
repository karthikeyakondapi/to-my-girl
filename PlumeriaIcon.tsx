
import React from 'react';

interface PlumeriaIconProps {
  className?: string;
  size?: number;
}

export const PlumeriaIcon: React.FC<PlumeriaIconProps> = ({ className = "", size = 48 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Five delicate petals */}
      <path d="M50 50C50 50 30 20 50 10C70 20 50 50 50 50Z" fill="#FFFDF9" stroke="#FCEEE9" strokeWidth="1" />
      <path d="M50 50C50 50 80 30 90 50C80 70 50 50 50 50Z" fill="#FFFDF9" stroke="#FCEEE9" strokeWidth="1" />
      <path d="M50 50C50 50 70 80 50 90C30 80 50 50 50 50Z" fill="#FFFDF9" stroke="#FCEEE9" strokeWidth="1" />
      <path d="M50 50C50 50 20 70 10 50C20 30 50 50 50 50Z" fill="#FFFDF9" stroke="#FCEEE9" strokeWidth="1" />
      <path d="M50 50C50 50 30 20 10 30C20 40 50 50 50 50Z" fill="#FFFDF9" stroke="#FCEEE9" strokeWidth="1" />
      
      {/* Soft yellow center gradient */}
      <circle cx="50" cy="50" r="12" fill="#FFE082" fillOpacity="0.6" />
      <circle cx="50" cy="50" r="6" fill="#FFD54F" />
    </svg>
  );
};

export const PlumeriaPetal: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div className="petal" style={style}>
    <svg width="20" height="20" viewBox="0 0 40 40">
      <path d="M20 20C20 20 10 5 20 0C30 5 20 20 20 20Z" fill="#FFFDF9" fillOpacity="0.9" />
      <path d="M20 20C20 20 10 5 20 0" stroke="#FCEEE9" strokeWidth="0.5" />
      <circle cx="20" cy="18" r="2" fill="#FFE082" />
    </svg>
  </div>
);
