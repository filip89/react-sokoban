import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import MapBuilder from './components/MapBuilder/MapBuilder';
import Game from './components/Game/Game';
import { map2 } from './maps/map2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MapBuilder />
    {/*<Game map={map2} />*/}
  </React.StrictMode>,
);
