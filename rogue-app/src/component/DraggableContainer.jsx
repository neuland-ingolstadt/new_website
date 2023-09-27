import Draggable from "react-draggable";
import HideObjekt from "./HideObjekt";


export default function DraggableContainer() {
  return(
    <div>
      <Draggable>
        <div>
          <HideObjekt/>
        </div>
      </Draggable>
    </div>
  );
}


