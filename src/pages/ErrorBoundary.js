import { useState } from "react";

function ErrorBoundary({ children } ) {
  const [hasError, setHasError] = useState(false);

  const handleTryAgainClick = () => {
    setHasError(false);
  };

  const handleComponentDidCatch = (error, errorInfo) => {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
    setHasError(true);
  };

  if (hasError) {
    return (
      <div>
        <h2>Oops, there is an error!</h2>
        <button type="button" onClick={handleTryAgainClick}>
          Try again?
        </button>
      </div>
    );
  }

  return (
    <ErrorBoundary componentDidCatch={handleComponentDidCatch}>
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundary;