
import React from 'react'
import { connect } from 'react-redux';
import './register.css'
import { Container, Row, Col } from 'react-bootstrap';

class RegisterComp extends React.Component {
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
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user" formControlName="email" placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" formControlName="password" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user" formControlName="userName" placeholder="User name" />
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

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD' }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComp);

