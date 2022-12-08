import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import './index.css';
import {CharacteristicItem} from "./components/characteristic-item";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
        <CharacteristicItem name={'Strength'} value={15} abbreviation={'STR'} />
    {/*</Provider>*/}
  </React.StrictMode>
);