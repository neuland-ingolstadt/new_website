import { useState } from "react";
import Sponsor from "../Sponsor";

export default function HideObjekt(){
    const [dp, setDp] = useState(true);
    return (
        <div>
            <button type="button" onClick={() => setDp(!dp)}> X </button>
            {dp && <div><Sponsor/></div>}
        </div>
    );
  }
  