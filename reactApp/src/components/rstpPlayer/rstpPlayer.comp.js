import React from 'react'
// import Flashphoner from './flashphoner';
import './rstp.css'
export default class RstpPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render(props) {
        return (
            <div>
                <h1>Rstp Player </h1>
                <iframe className="video_iframe" scrolling="no" width="310px" height="160px" src={"http://localhost:3888/?rstpUrl="+this.props.streamUrl} />
            </div>
        );
    }
}

