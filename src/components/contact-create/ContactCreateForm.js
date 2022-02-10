import React from "react";
import{Form,Input ,AvatarImage, Button1 }from '../Style'

class ContactCreateForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            profilePic: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <div>
                    <AvatarImage src={this.state.profilePic} alt="Profile preview." />
                </div>
                <div>
                    <div>
                        <Input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Profile Picture Url"
                            name="profilePic"
                            value={this.state.profilePic}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Button1 type="submit">Add Contact</Button1>
                    </div>
                </div>
            </Form>
        )
    }
}

export default ContactCreateForm;