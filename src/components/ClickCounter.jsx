import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {

    render() {
        console.log(this.props)
        return (
            <>
            <h1 className='text-3xl font-bold'>{this.props.name}</h1>
                <div className='flex items-center gap-4 mt-6'>
                    <div className='cursor-pointer bg-blue-400 p-4 rounded text-center' onClick={() => {
                        this.props.incrementCounter()
                    }}>{this.props.counter}</div>
                </div>

            </>
        )
    }

}

export default withCounter(ClickCounter);