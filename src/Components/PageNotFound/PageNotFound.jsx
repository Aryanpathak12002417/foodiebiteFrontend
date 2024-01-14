import React from 'react'
import styles from './PageNotFOund.module.css'

function PageNotFound() {
  return (
    <div className={styles.notFound}>
        <h3>4 0 4</h3>
        <div className={styles.line}></div>
        <p style={styles.errText}>Page Not Found</p>
    </div>
  )
}

export default PageNotFound