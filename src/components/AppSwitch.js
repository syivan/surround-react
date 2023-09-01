import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function AppSwitch() {
    return (
        <>
            <div className="mb-3 ms-3 mt-2 me-3">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 mt-2"
                >
                    <Tab eventKey="home" title="Home">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Tab content for Profile
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default AppSwitch;