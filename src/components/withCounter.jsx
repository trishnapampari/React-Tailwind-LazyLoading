import { Component } from "react";

const withCounter = (WrappedComponent) => {
    return class WithCounter extends Component {

        constructor() {
            super()
            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => {
            this.setState({counter:this.state.counter+1})
        }

        render() {
            return <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} {...this.props}/>
        }
    }
}

export default withCounter;