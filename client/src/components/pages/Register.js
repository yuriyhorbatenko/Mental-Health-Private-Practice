import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';
// import api from "../components/utils/api";


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FirstName: "",
            FirstNameError: "",
            LastName: "",
            LastNameError: "",
            Email: "",
            EmailError: "",
            Password1: "",
            passwordError1: "",
            Password2: "",
            passwordError2: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            FirstNameError: "",
            LastNameError: "",
            EmailError: "",
            passwordError1: "",
            passwordError2: ""
        };

        if (this.state.FirstName.length < 1) {
            isError = true;
            errors.FirstNameError = "First name can't be blank";
        }

        if (this.state.LastName.length < 1) {
            isError = true;
            errors.LastNameError = "Last name can't be blank";
        }

        if (this.state.Email.indexOf("@") === -1) {
            isError = true;
            errors.EmailError = "Requires valid email";
        }

        if (this.state.Password1.length < 6) {
            isError = true;
            errors.passwordError1 = "Password needs to be at least 6 characters long";
        }

        if (this.state.Password1 !== this.state.Password2) {
            isError = true;
            errors.passwordError2 = "Password didn't match";
        }

        // else {
        //     api.saveUser()
        //         .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        //         .catch(err => console.error(err));
        // }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const err = this.validate();

        if (!err) {
            this.setState({
                FirstName: "",
                LastName: "",
                Email: "",
                Password1: "",
                passwordError1: "",
                Password2: "",
                passwordError2: ""
            });
        }
    };

    render() {
        return (
            <div id="RegisterBody">
                <div className="RegisterForm">
                    <Fade>
                        <Form>
                            <Form.Group controlId="FirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    name="FirstName"
                                    value={this.state.FirstName}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="First name"
                                    required />
                                <Form.Text className="text-muted" id="error-text">{this.state.FirstNameError}</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="LastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    name="LastName"
                                    value={this.state.LastName}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Last name"
                                    required />
                                <Form.Text className="text-muted" id="error-text">{this.state.LastNameError}</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name="Email"
                                    value={this.state.Email}
                                    onChange={this.handleInputChange}
                                    type="email"
                                    placeholder="Enter email"
                                    required />
                                <Form.Text className="text-muted" id="error-text">{this.state.EmailError}</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="Password1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="Password1"
                                    value={this.state.Password1}
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                    required />
                                <Form.Text className="text-muted" id="error-text">{this.state.passwordError1}</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="Password2">
                                <Form.Label>Re-Password</Form.Label>
                                <Form.Control
                                    name="Password2"
                                    value={this.state.Password2}
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                    required />
                                <Form.Text className="text-muted" id="error-text">{this.state.passwordError2}</Form.Text>
                            </Form.Group>

                            <Button name="submit" variant="dark" type="submit" onClick={this.handleFormSubmit}>
                                Submit
                        </Button>

                        </Form>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Register;