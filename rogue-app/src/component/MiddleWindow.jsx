import BsTabs from './BsTabs';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MiddleWindow() {
    return (
        <div className="Window" style={{height: "500px", marginLeft:"150px", marginRight: "150px"}}>
        <BsTabs/>
        </div>
    )


}