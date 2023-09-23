import React, {useState} from "react";
import Draggable from "react-draggable";
import EposDark from '../images/Logos/epos_dark.png'

export default function DraggableSupporter() {
  return(
    <div>
      <HideObjekt/>
    </div>
  );
}


    
function HideObjekt(){
  const [dp, setDp] = useState(false);
  return (
    <Draggable>
      <div style={{textAlign:"right", width:"200px" }}><button type="button" onClick={() => setDp(!dp)}> X </button>
        {dp && <div>
          <div className="Drag" style={{height:"100px", width:"200px"}}>
            <img src={EposDark} className="Sup"  alt="Support" style={{height:"100px", width:"200px",objectFit:"contain"}}  />
          </div>
        </div>}
      </div>
    </Draggable>
  );
}

