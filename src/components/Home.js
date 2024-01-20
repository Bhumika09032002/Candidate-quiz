import React, { Fragment } from 'react'
import Background from '../assets/bg.jpg';


const Home = () => (
  <Fragment>
    <div id='home' style={{backgroundImage: `url(${Background})`}}>
      <section>
        <h1>ST Hiring Test</h1>
        <div className='start-button-container'>
          <ul>
            <li className='start-button'>Start</li>
          </ul>
        </div>
        <div className='quizLogin'>
          Login
        </div>
      </section>
    </div>
  </Fragment>
  
    
  );


export default Home
