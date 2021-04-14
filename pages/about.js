import React, { Component } from 'react'
import styles from '../styles/About.module.css'

export class about extends Component {
    render() 
    {
        return (
            <div>
                 <div className={styles.aboutsection}>
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>


<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="/" alt="Jane" style="width:100%"/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  </div>
            </div>

            
        )
    }
}

export default about

