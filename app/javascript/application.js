import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  } else {
    console.error("Root element with ID 'root' not found.");
  }
});