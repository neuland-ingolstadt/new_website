import React from 'react';


export default function BottomNav(){
return (
      <footer className="page-footer py-1" style={{backgroundColor: "white",position:"fixed", left:"0px",right:"0px",bottom:"0px",color: "black"}}>
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
              <div className="footer-copyright text-center" >© 2023 Copyright</div>
      </footer>
  )
}