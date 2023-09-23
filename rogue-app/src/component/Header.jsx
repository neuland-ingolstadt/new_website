import NeulandLogo from '../images/Logos/logo_dark.png'

export default function Header() {
  return (
    <div className='page-he container-flex row row-cols-1 row-cols-sm-2 ' style={{padding:"25px"}}>
        <div>
        <img src={NeulandLogo} className="Logo" alt="Logo" style={{margin:"auto"}}/>
        </div>
        <div className='Members' style={{textAlign:"right", margin:"auto"}}>
          <a href="https://pad.informatik.sexy/s/Mitgliederbereich" style={{color:"white" }} >Mitgliederbereich</a>
        </div>
   </div>
    );
}
