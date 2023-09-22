import NeulandLogo from '../images/Logos/logo_dark.png'

export default function Header() {
  return (
    <div className='container-flex, row row-cols-1 row-cols-sm-2 ' style={{ margin: "50px", marginBottom:"25px"}}>
        <div>
        <img src={NeulandLogo} className="Logo" alt="Logo"/>
        </div>
        <div className='Members' style={{textAlign:"right", margin:"auto"}}>
          <a href="https://pad.informatik.sexy/s/Mitgliederbereich" style={{color:"white" }} >Mitgliederbereich</a>
        </div>
   </div>
    );
}
