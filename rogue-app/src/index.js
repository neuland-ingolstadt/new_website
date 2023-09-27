import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import NeulandLogo from './images/Logos/logo_dark.png'
import BsTabs from './component/BsTabs';
import HideObjekt from './component/HideObjekt';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <header>
    <div className="container-fluid && row row-cols-2 && row-cols-dm-2 " style={{padding:"25px"}}>
      <div className="">
        <img src={NeulandLogo} className="img-fluid" alt="Neuland-Logo" />
      </div>
      <div className="" style={{textAlign:"right", margin:"auto"}}>
        <a href="https://pad.informatik.sexy/s/Mitgliederbereich" style={{color:"white" }} >Mitgliederbereich</a>
      </div>
    </div>
  </header>

  <BsTabs/>

  <HideObjekt/>
  
  <footer className="page-footer py-1" style={{backgroundColor: "white",position:"fixed", left:"0px",right:"0px",bottom:"0px"}}>
    <ul className="nav justify-content-center">
      <li className="nav-item" >
        <a className="nav-link" style={{color: "black"}} href="https://pad.informatik.sexy/s/Satzung">Satzung</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color: "black"}} href="https://pad.informatik.sexy/s/Datenschutzordnung">Datenschutzordnung</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color: "black"}} href="https://pad.informatik.sexy/s/Datenschutzhinweise">Datenschutzhinweise</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color: "black"}} href="https://neuland-ingolstadt.de/impressum.htm">Impressum</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color: "black"}} href="https://github.com/neuland-ingolstadt/" >Github</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color: "black"}} href="https://www.linkedin.com/company/neuland-ingolstadt">Linkedin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color: "black"}} href="https://www.instagram.com/neuland_ingolstadt/">Instagram</a>
      </li>
    </ul>
    <div className="footer-copyright text-center p-1,5" style={{color: "black"}}>© 2023 Copyright</div>
  </footer>

  </React.StrictMode>
);