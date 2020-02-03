
import React from 'react'
import history from '../../services/history'
import '../../css/form.css'
import './home.css'
import { Container, Row, Col } from 'react-bootstrap';
import Rstp from '../../services/rstp.service'

class HomeComp extends React.Component {
    constructor(props) {
        super(props);
        this.rstp = new Rstp();
        this.state = {
            url: {
                value: '',
                valid: false,
                used: false
            },
        };
    }

    componentDidMount() {
        console.log(this.props);
    }
    handleUrlChange = (event) => {
        const regex = /(rtsp):\/\/(?:([^\s@\/]+?)[@])?([^\s\/:]+)(?:[:]([0-9]+))?(?:(\/[^\s?#]+)([?][^\s#]+)?)?([#]\S*)?/g
        const _valid = (event.target.value.match(regex)) ? true : false;
        this.setState({
            url: {
                value: event.target.value,
                valid: _valid,
                used: true
            }
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.state.url.valid) {
            const res = await this.rstp.addNewUrl(this.state.url.value);
            console.log(res);
            if(res){
                history.push("/grid");
            }
        }
    }

    render() {
        let urlVlidationMsg = "";
        if (!this.state.url.valid && this.state.url.used) {
            urlVlidationMsg = <div className="errorMessage">Error url is not valid</div>;
        } else {
            urlVlidationMsg = <div className="errorMessage"></div>;
        }

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
                                                    <input type="text" className="form-control form-control-user" value={this.state.url.value} onChange={this.handleUrlChange} placeholder="Enter Rstp url" />
                                                    {urlVlidationMsg}
                                                </div>
                                                <button className="btn btn-primary btn-user btn-block" type="submit">Add</button>
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

export default HomeComp;

