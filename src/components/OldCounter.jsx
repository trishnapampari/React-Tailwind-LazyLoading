import { Component } from "react";

class OldCounter extends Component {
    constructor() {
        super()
        this.state={
            counter:0
        }
    }

    render() {
        return (
            <>
            <h1 className='text-3xl font-bold'>{this.props.name}</h1>
                <div className='flex items-center gap-4 mt-6'>
                    <button className='bg-blue-400 px-4 py-1 rounded' onClick={() => {
                        this.setState({counter:this.state.counter-1})
                    }}>-</button>
                    <div>{this.state.counter}</div>
                    <button className='bg-blue-400 px-4 py-1 rounded' onClick={() => {
                        this.setState({counter:this.state.counter+1})
                    }}>+</button>
                </div>

            </>
        )
    }

}

export default OldCounter;