import React from "react";
import {Container, Row, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab1 from "../Tab1_about_us";
import Tab2 from "../Tab2_projekt";
import Tab3 from "../Tab3_members";

const BsTabs = () => {
    return (
    <div className="container-d" >
        <Container className="py-4">
                <Row className="justify-content-centerborder && border border-black && rounded-0">
                <Tabs justify variant="pills" defaultActiveKey="tab-1" className="rounded-0" >
                    <Tab eventKey="tab-1" title="About_us.html" className="border border-black && rounded-0" style={{margin:"0px"}}>
                        <Tab1 />
                    </Tab>
                    <Tab eventKey="tab-2" title="projekt.js" className="border border-black && rounded">
                        <Tab2 />
                    </Tab>
                    <Tab eventKey="tab-3" title="mitglied_werden.css" className="border border-black && rounded ">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    </div>
    )
}

export default BsTabs;