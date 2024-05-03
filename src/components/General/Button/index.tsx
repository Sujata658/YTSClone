import React from 'react';

interface ButtonProps {
  background: string;
  hover?: string;
  textColor?: string;
  content: string;
  size?: 'sm' | 'md' | 'lg';
  trailing?: any;
  leading?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  border?: string;
  borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({ background, hover = '', textColor = 'text-white', content, size = 'md', trailing, onClick, border = 'border-0', borderColor, leading }) => {
  const sizeClasses = size === 'sm' ? 'px-4 py-1 text-sm' : size === 'lg' ? 'px-12 py-4 text-lg' : 'px-8 py-2';

  return (
    <button
      className={`flex items-center rounded justify-center ${sizeClasses} ${background} ${hover} ${textColor} ${border} ${borderColor} `}
      onClick={onClick}
    >
       {leading && <span className="mr-2">{leading}</span>}

      {content}
      {trailing && <span className="ml-2">{trailing}</span>}
    </button>
  );
};

export default Button;
