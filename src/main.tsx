import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { logVisit } from './visitLog';
import './styles.css';

logVisit();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
