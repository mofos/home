import React, { Component } from 'react'


import styles from '../styles/downloads.module.css'
export class Downloads extends Component {
    render() {
        return (
            <div>
                <div className={styles.website}>

                    <h1 className={styles.h1}>Get the WAP Attack Source Code</h1>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                    <button className={styles.button}>Download WAP:AS</button>
                    <div className={styles.websiteimg}></div>


                </div>
                <div className={styles.website2}>

                    <h1 className={styles.h11}>Get the WAP Attack Source Code</h1>
                    <p className={styles.p11}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                    <button className={styles.button}>Download WAP:AS</button>
                    <div className={styles.websiteimg}></div>


                </div>
            </div>
        )
    }
}

export default Downloads
