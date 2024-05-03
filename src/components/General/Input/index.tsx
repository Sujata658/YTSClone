import React from 'react';

interface InputProps {
  placeholder: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  focusColor?: string;
  rounded?: string;
  border?: string;
  backgroundColor?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void; 
}

const Input = ({
  placeholder,
  leadingIcon,
  trailingIcon,
  focusColor,
  rounded = 'rounded-md',
  backgroundColor,
  border = 'border border-gray-300',
  onChange,
  onSubmit, 
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value); 
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSubmit) {
      onSubmit((event.target as HTMLInputElement).value);
    }
  };

  return (
    <div className="relative text-textprim">
      {leadingIcon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {leadingIcon}
        </div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full ${border} ${rounded} py-2 pl-10 pr-3 focus:outline-none ${
          focusColor === 'none' ? '' : focusColor
        } ${backgroundColor} ${trailingIcon ? 'pr-10' : ''}`}
        onChange={handleChange}
        onSubmit={handleKeyPress} 
      />
      {trailingIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {trailingIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
