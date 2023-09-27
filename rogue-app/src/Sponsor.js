import EposDark from './images/Logos/epos_light.png'
import Xitaso from './images/Logos/xitaso_light.png'

export default function Sponsor() {
    return(
        <div className="container-flex" style={{ display: "flex", backgroundColor:"white", width: "400px"}} >
            <div className='column'>
            <img src={EposDark} className="Sup"  alt="Support1" style={{height:"100px", width:"200px",objectFit:"contain", padding: "10px"}}  />
            </div>
            <div className='column'>
            <img src={Xitaso} className="Sup"  alt="Support2" style={{height:"100px", width:"200px",objectFit:"contain",padding: "10px"}}  />
            </div>
          </div>
    )
}