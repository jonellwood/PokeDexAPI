import React from 'react';
import './ErrorHandler.css';

function ErrorHandler({ err }) {
  return (
    <div className="errorHandler">
      {err.toString()}
    </div>
  );
}

export default ErrorHandler;
