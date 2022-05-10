import React from "react";

import "./LoadingContainer.css";

export interface ILoadingContainerProps {
  loading: boolean;
  error: string;
  retry: VoidFunction;
  children: React.ReactNode;
}

const LoadingContainer: React.FC<ILoadingContainerProps> = ({
  loading,
  children,
  retry,
  error,
}) => {
  if (loading) {
    return (
      <div className="loading-container" data-testid="loading-container">
        <div className="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="error-container">
        <h2>{error}</h2>
        <button data-testid="retry-button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="content" data-testid="content-container">
      {children}
    </div>
  );
};

export default LoadingContainer;
