import React, { Component, Fragment } from 'react'

class Quiz extends Component{
    // constructor(props){
    //     super(props);
    // }
    increaseCount=()=>{
        this.setState({
            counter:5
        });
    };
    render(){
        return(
            <Fragment>
                <div className='questions'>
                    <div>
                        <p>
                            <span>1 of 25</span>
                        </p>

                    </div>
                    <h3>Identify the incorrect constructor type?</h3>
                    <div className='option-container'>
                        <p className='options'>Friend</p>
                        <p className='options'>Default</p>
                    </div>
                    <div className='option-container'>
                        <p className='options'>Parameterized</p>
                        <p className='options'>Copy</p>
                    </div>

                    <div className='button-container'>
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                
                </div>
            </Fragment>

        );
    }
}
export default Quiz
