import React, { Component } from 'react'


import styles from '../styles/downloads.module.css'
export class Downloads extends Component {
    render() {
        return (
            <div>
                <div className={styles.website}>

<div className={styles.a}>
                    <h1 className={styles.h1}>Get the WAP Attack Source Code</h1>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                    <button className={styles.button}>Download WAP</button>
                    </div>
                    <div className={styles.websiteimg}></div>


                </div>
                
                <div className={styles.website2}>
                <div className={styles.a}>

                    <h1 className={styles.h11}>WAP ATTACK GUIDE</h1>
                    <p className={styles.p11}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                    <button className={styles.button}>Download PDF</button>
                    <div className={styles.websiteimg11}></div>


                </div>
                </div>
            </div>
        )
    }
}

export default Downloads
