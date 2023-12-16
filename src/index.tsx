import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, initializeIcons} from '@fluentui/react';
import { Theme } from './assets/FluentUITheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

initializeIcons();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);