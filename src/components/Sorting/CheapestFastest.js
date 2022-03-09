import React from 'react'
import styles from '../../index.module.css'

const CheapestFastest = () => {
  return (
    <div>
      <button className={`${styles.sortButtonActiveFirst} ${styles.sortButton}`}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={`${styles.sortButtonSecond} ${styles.sortButton}`}>САМЫЙ БЫСТРЫЙ</button>
      <button className={`${styles.sortButtonThird} ${styles.sortButton}`}>ОПТИМАЛЬНЫЙ</button>
    </div>
  )
}

export default CheapestFastest
