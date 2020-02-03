
import React from 'react'
import { connect } from 'react-redux';
import './register.css'
import '../../css/form.css'
import { Container, Row, Col } from 'react-bootstrap';
import Users from '../../services/users.service'
import history from '../../services/history'

class RegisterComp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name:''
        };
        this.users = new Users();
    }
    handleEmailChange = (event) =>{
        this.setState({email:event.target.value});
    }
    handlePasswordChange = (event) =>{
        this.setState({password:event.target.value});
    }
    handleUsernameChange = (event) =>{
        this.setState({name:event.target.value});
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.email,this.state.password);
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        const res = await this.users.register(user);
        if(res){
            history.push("/home");
        }
        console.log(res);
    }
    render() {
        return (
            <Container>
                  <Row className="justify-content-center">
                    <Col lg="6">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <Row>
                                    <Col lg="12">
                                        <div className="p-5">
                                            <form className="user" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user" value={this.state.name} onChange={this.handleUsernameChange} placeholder="User name" />
                                                </div>
                                                <h5 className="loginStatus"></h5>
                                                <button className="btn btn-primary btn-user btn-block" type="submit">Register</button>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default RegisterComp;
