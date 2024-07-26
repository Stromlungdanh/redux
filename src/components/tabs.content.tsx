import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import UsersTable from './users.table';

function TabsContent() {
    return (
        <Container>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 mt-3"
            >
                <Tab eventKey="user" title="User">
                    <UsersTable/>
                </Tab>
                <Tab eventKey="blog" title="Blogs">
                    Tab content for Profile
                </Tab>
            </Tabs>
        </Container>
    );
}

export default TabsContent;