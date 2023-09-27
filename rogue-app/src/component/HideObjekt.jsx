import { useState } from "react";
import Sponsor from "../Sponsor";
import Draggable from "react-draggable";

export default function HideObjekt(){
    const [dp, setDp] = useState(true);
    return (
        <Draggable>
        <div className="container">
            <button type="button" onClick={() => setDp(!dp)}> X </button>
            {dp && <div><Sponsor/></div>}
        </div>
        </Draggable>
    );
  }
  