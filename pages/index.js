import Head from "next/head";
import Layout from "../components/layout";
import Content from "../components/sections/Content";

import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Tab,
  Row,
  Col,
  Card
} from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <Container>
          <h1 className="my-5 header" align="center">
            Registration for Traders Lounge Ph Members
          </h1>

          <Tab.Container id="info" defaultActiveKey="1">
            <Row className="mb-3">
              <Container>
                <Nav fill variant="pills" className="flex-column flex-lg-row">
                  <Nav.Item>
                    <Nav.Link eventKey="1">Account Information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">Personal Information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Investor Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="4">FATCA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="5">Agreement</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
            </Row>
            <Row>
              <Container>
                <Card>
                  <Card.Body>
                    <Form>
                      <Tab.Content>
                        <Tab.Pane eventKey="1">
                          <h6 className="font-weight-bold">
                            ACCOUNT INFORMATION
                          </h6>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                            <Form.Text id="passwordHelpBlock" muted>
                              If registering for <strong>MARGE</strong> account,
                              please start with <strong>MG</strong>.{" "}
                              <em>
                                (Lagyan ng <strong>MG</strong> ang username kung
                                nag-apply ng <strong>MARGE</strong>)
                              </em>{" "}
                              <br /> ex. q <strong>MG</strong>Athena101
                            </Form.Text>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label htmlFor="inputPassword5">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                              Your password must be 8-20 characters long,
                              contain letters and numbers, and must not contain
                              spaces, special characters, or emoji.
                            </Form.Text>
                          </Form.Group>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">TEST2</Tab.Pane>
                      </Tab.Content>
                    </Form>
                  </Card.Body>
                </Card>
              </Container>
            </Row>
          </Tab.Container>
        </Container>
      </Layout>
    </div>
  );
}
