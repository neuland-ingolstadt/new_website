import BsTabs from './BsTabs';
import DraggableSupporter from './DraggableSupporter';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MiddleWindow() {
    return (
        <div className="Window">
        <BsTabs/>
        <DraggableSupporter/>
        </div>
    )


}