import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Error Boundary Wrapper (for better user experience in case of errors)
const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error('App crashed:', error);
    return <h1>Something went wrong. Please try again later.</h1>;
  }
};

// Get root element safely
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found! Make sure you have a <div id='root'></div> in your index.html.");
}

// Create a root
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Enable performance monitoring only if needed
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log);
}
