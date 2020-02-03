
import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './grid.css'
import Rstp from '../../services/rstp.service'
import RstpPlayer from '../rstpPlayer/rstpPlayer.comp'
class GridComp extends React.Component {
    constructor(props) {
        super(props);
        this.rstp = new Rstp();
        this.state = {
            items: [],
            selectedUrl: ''
        };
    }

    async componentDidMount() {
        const res = await this.rstp.getAll();
        this.setState({ items: res });
    }

    changeSelectedUrl(url) {
        console.log(url);
        this.setState({ selectedUrl: url })
    }
    render() {
        const gridData = this.state.items.map((item) =>
            <tr className="tableRow" key={item._id} onClick={() => this.changeSelectedUrl(item.url)}>
                <th scope="row">{item._id}</th>
                <td>{item.email}</td>
                <td>{item.url}</td>
            </tr>
        );
        return (
            <Container>
                <RstpPlayer streamUrl={this.state.selectedUrl}/>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>object id</th>
                            <th>user email</th>
                            <th>link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gridData}

                    </tbody>
                </Table>
            </Container>
        );
    }

}

export default GridComp;

