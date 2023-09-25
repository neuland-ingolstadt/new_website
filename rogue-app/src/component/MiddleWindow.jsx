import BsTabs from './BsTabs';
import DragContainer from './DraggableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MiddleWindow() {
    return (
        <div className="Window">
        <BsTabs/>
        <DragContainer/>
        </div>
    )


}