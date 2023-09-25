import React, {useState} from "react";
import Draggable from "react-draggable";
import Sponsor from "../Sponsor";

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
      <div><button type="button" onClick={() => setDp(!dp)}> X </button>
        {dp && <div>
          <Sponsor/>
        </div>}
      </div>
    </Draggable>
  );
}

