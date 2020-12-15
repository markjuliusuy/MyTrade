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

import { Formik } from "formik";
import * as yup from "yup";

export default function Home() {

    const secret_question_options = [
        {
            id: 'OTR',
            value: 'My own question'
        },
        {
            id: 'Mother maiden name',
            value: 'Mother maiden name'
        },
        {
            id: 'My favourite cartoon',
            value: 'My favourite cartoon'
        },
        {
            id: 'My favourite car',
            value: 'My favourite car'
        },
        {
            id: 'Name of my pet',
            value: 'Name of my pet'
        }
        ];

    const schema = yup.object({
        username: yup.string().required(),
    });

    const formInitialValues = {
        username:'',
        password:''
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
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
                                        <Formik
                                            initialValues={formInitialValues}
                                            onSubmit={(values) => {
                                                console.log(values);
                                            }}
                                            validationSchema={schema}
                                        >
                                            {({
                                                  handleSubmit,
                                                  handleChange,
                                                  handleBlur,
                                                  values,
                                                  touched,
                                                  isValid,
                                                  errors,
                                              }) => (
                                        <Form noValidate onSubmit={handleSubmit}>
                                            {console.log(values)}
                                            <Tab.Content>
                                                <Tab.Pane eventKey="1">
                                                    <h6 className="font-weight-bold">
                                                        ACCOUNT INFORMATION
                                                    </h6>
                                                    <Form.Group controlId="username">
                                                        <Form.Label>Username</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Username"
                                                            name="username"
                                                            value={values.username}
                                                            onChange={handleChange}
                                                            aria-describedby="usernameHelpBlock"
                                                            isInvalid={touched.username && errors.username}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.username}
                                                        </Form.Control.Feedback>
                                                        <Form.Text id="usernameHelpBlock" muted>
                                                            If registering for <strong>MARGE</strong> account,
                                                            please start with <strong>MG</strong>.{" "}
                                                            <em>
                                                                (Lagyan ng <strong>MG</strong> ang username kung
                                                                nag-apply ng <strong>MARGE</strong>)
                                                            </em>{" "}
                                                            <br/> ex. q <strong>MG</strong>Athena101
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
                                                            placeholder="Password"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label htmlFor="inputPassword5">
                                                            Trading PIN
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            id="inputPassword5"
                                                            placeholder="Trading PIN"
                                                            aria-describedby="pinHelpBlock"
                                                        />
                                                        <Form.Text id="pinHelpBlock" muted>
                                                            6-digit password for your buy & sell orders (works like an ATM PIN)
                                                        </Form.Text>
                                                    </Form.Group>
                                                    <Form.Group className="mb-0">
                                                        <Form.Label htmlFor="inputPassword5">
                                                            Hint for Forgotten Password
                                                        </Form.Label>
                                                        <Form.Row>
                                                            <Form.Group as={Col} md="4">
                                                                <Form.Control
                                                                    as="select"
                                                                    id="inlineFormCustomSelectPref"
                                                                >
                                                                    {secret_question_options.map( (question) => {
                                                                       return <option value={question.id} key={question.id}>{question.value}</option>
                                                                    })}
                                                                </Form.Control>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="8">
                                                                <Form.Control
                                                                    as="select"
                                                                    id="inlineFormCustomSelectPref"
                                                                >
                                                                    <option value="0">Choose...</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label htmlFor="inputPassword5">
                                                           Secret Answer
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="inputPassword5"
                                                                placeholder="Secret Answer"
                                                        />
                                                    </Form.Group>
                                                    <Button variant="primary" type="button" className="float-right">
                                                        Next
                                                    </Button>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="2">TEST2</Tab.Pane>
                                            </Tab.Content>
                                        </Form>
                                                )}
                                        </Formik>
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
