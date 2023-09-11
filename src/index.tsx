import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseFieldArray from './react-hook-form/UseFieldArray';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <UseFieldArray />
  </StrictMode>
);
