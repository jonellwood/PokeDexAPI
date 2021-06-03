import React from 'react';

function ErrorHandler({ err }) {
  return (
    <div className="errorHandler">
      {err.toString()}
    </div>
  );
}

export default ErrorHandler;
