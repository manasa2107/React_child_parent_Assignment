import React from 'react'
class ClassCounter extends React.Component <{}, {count:number}> {
    constructor(props:any) {
        super(props);
        this.state ={
            count:0
        };
    }
    incrementCount = ()=>{
        this.setState (prevState => {
            return {
            count:prevState.count+1 
            }
        })
    }
    render() {
        return (
            <div>
            <button onClick={this.incrementCount}>Count {this.state.count}
            </button>
            </div>
        );
    }
}

export default ClassCounter;