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
                <h1>player</h1>
                <iframe className="video_iframe" scrolling="no" width="310px" height="160px" src="http://localhost:3888/?rstpUrl=rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa"/>
            </div>
        );
    }
}

