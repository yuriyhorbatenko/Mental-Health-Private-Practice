import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <ErrorBoundary render={() => <div className='error'>I've got issues.</div>}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
