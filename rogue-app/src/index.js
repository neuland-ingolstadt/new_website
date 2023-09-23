import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import BottomNav from './component/Fooder';
import MiddleWindow from './component/MiddleWindow';
import 'bootstrap/dist/css/bootstrap.min.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MiddleWindow />
    <BottomNav />
  </React.StrictMode>
);