import React, { useState } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackUI: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, fallbackUI }) => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleOnError = () => {
    setHasError(true);
  };

  if (hasError) {
    return fallbackUI;
  }

  return (
    <ReactErrorBoundary fallbackRender={() => fallbackUI} onError={handleOnError}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
