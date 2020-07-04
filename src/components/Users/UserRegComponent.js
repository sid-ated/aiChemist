import React , {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Registration extends Component {
    constructor (props){
        super(props);
        this.state={
            
        };
        this.handleRegister=this.handleRegister.bind(this);
    }

    handleRegister(event){
        this.props.registerUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }

    render() {
        return (
            <>
                {!this.props.auth.isAuthenticated ?
                <div>
                    <Form onSubmit={this.handleRegister}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                    innerRef={(input)=>this.username=input}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                            innerRef={(input)=>this.password=input}/>
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit" value="submit" className="bg-primary" mt-2>Register</Button>
                        </FormGroup>
                    </Form>
                </div>
                :
                <div>
                    <h1>You are loggedin!</h1>
                </div>
                }
            </>
        );

    }
}
export default Registration ;
