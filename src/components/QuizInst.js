import React, { Fragment } from 'react'
import quiz1 from '../assets/quiz1.png';
import quiz2 from '../assets/quiz2.png';


const QuizInst = () => (
    <Fragment>
        <div className='instContainer'>
            <h1>Important Instructions!</h1>
            <p>Ensure that you read these instructions carefully before starting.</p>
            <ul className='instList'>
                <li>The quiz has a duration of 1 hour i.e. 60 minutes and ends as soon as the time elapses.</li>
                <li>The quiz consists of 50 questions.</li>
                <li>Every question contains four options and only one is correct.
                <img src={quiz1} alt="Options" />
                </li>
                <li>Select the option which best answers the question by clicking (or selecting) it.
                <img src={quiz2} alt="Options" />
                </li>
                <li>Click NEXT buttton to jump on the next question and PREVIOUS button to jump on the previous question. </li>
                
        
            </ul>
            <div>
                {/* <span className='left'>No take me back</span>
                <span className='right'>Okay, start Quiz</span> */}
                <button className='left'>Back</button>
                <button className='right'>Start</button>

            </div>
        </div>
    </Fragment>
  )


export default QuizInst
