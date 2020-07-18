import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formBasicFirstName: "",
            formBasicLastName: "",
            formBasicEmail: "",
            formBasicPassword1: "",
            formBasicPassword2: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (

            <div className="RegisterForm">
                <Fade>
                    <Form>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="formBasicFirstName"
                                value={this.state.formBasicFirstName}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="First name"
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="formBasicLastName"
                                value={this.state.formBasicLastName}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Last name"
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="formBasicEmail"
                                value={this.state.formBasicEmail}
                                onChange={this.handleInputChange}
                                type="email"
                                placeholder="Enter email"
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="formBasicPassword1"
                                value={this.state.formBasicPassword1}
                                onChange={this.handleInputChange}
                                type="password"
                                placeholder="Password"
                                required />
                            <Form.Text className="text-muted">
                                We'll never share your password with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Re-Password</Form.Label>
                            <Form.Control
                                name="formBasicPassword2"
                                value={this.state.formBasicPassword2}
                                onChange={this.handleInputChange}
                                type="password"
                                placeholder="Password"
                                required />
                            <Form.Text className="text-muted">
                                Please re-enter your password.
                        </Form.Text>
                        </Form.Group>

                        <Button name="submit" variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Fade>
            </div>
        );
    }
}

export default Register;