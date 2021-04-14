import React, { Component } from 'react'
import styles from '../styles/About.module.css'

export class about extends Component {
    render() 
    {
        return (
            <>.
            <div className={styles.aboutus}>.
                <h1>Meet The Team!</h1>
               
                    <div className={styles.column}>
                    <div className={styles.card}>
                    <div className={styles.img}><img src="../img/IVBFsDO.jpg" alt="upna londa"/></div>
                    <div className={styles.container}>
                        <h2>Isaac John</h2>
                        <p>"Ni naman"</p>

                    </div>
                    </div>
                    </div>

                    
                    <div className={styles.column}>
                    <div className={styles.card}>
                    <div className={styles.img}><img src="../img/IVBFsDO.jpg" alt="ali bhai"/></div>
                    <div className={styles.container}>
                        <h2>Abdeali Waseef</h2>
                        <p>"trumpet nerd"</p>

                    </div>
                    </div>
                    </div>

                    
                    
                    <div className={styles.column}>
                    <div className={styles.card}>
                    <div className={styles.img}><img src="../img/IVBFsDO.jpg" alt="farooq" /></div>
                    <div className={styles.container}>
                        <h2>Raina Farooq</h2>
                        <p>"Suta gang!!"</p>

                    </div>
                    </div>
                    </div>
                
            </div>
            <div className={styles.para}>.
                
                
            </div>
            
            </>
           

            
        )
    }
}

export default about

