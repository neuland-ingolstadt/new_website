import EposDark from './images/Logos/epos_dark.png'
// import Brigk from './images/Logos/brigk_dark.png'
import Xitaso from './images/Logos/xitaso_dark.png'

export default function Sponsor() {
    return(
        <div className="container-flex row row-cols-md3 row-cols-sm-1"  >
            {/* <div className='column'>
            <img src={Brigk} className="Sup"  alt="Support0" style={{height:"100px", width:"200px",objectFit:"contain"}}  />
            </div> */}
            <div className='column'>
            <img src={EposDark} className="Sup"  alt="Support1" style={{height:"100px", width:"200px",objectFit:"contain"}}  />
            </div>
            <div className='column'>
            <img src={Xitaso} className="Sup"  alt="Support2" style={{height:"100px", width:"200px",objectFit:"contain"}}  />
            </div>
          </div>
    )
}