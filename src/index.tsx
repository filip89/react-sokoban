import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Game from './components/Game/Game';
import { map1 } from './maps/map1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Game map={map1} />
  </React.StrictMode>,
);
