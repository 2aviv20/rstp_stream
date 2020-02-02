import React from 'react'
import { connect } from 'react-redux';

class ButtonCounter extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count: 0
    //     };
    // }
    updateCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render(props){
        return(
            <div>
                <button onClick={this.props.onIncrementCounter}>click on me</button>
            </div>
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
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCounter);