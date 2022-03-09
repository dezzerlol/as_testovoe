import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilterThunk } from '../Redux/TicketsReducer'
import styles from './Transfers.module.css'


const Transfers = () => {
  //const [isChecked, setIsChecked] = useState(false)
  let [filters, setFilters] = useState([])

  const dispatch = useDispatch()
  const filterChange = (e) => {
    console.log(e.currentTarget.value)
    dispatch(setFilterThunk(e.currentTarget.value))
  }

  return (
    <div className={styles.transferContainer}>
      <div className={styles.mainText}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div>
        <div className={styles.item}>
          <input type={'radio'} id='all' defaultChecked name='testRadio' value={-1} onChange={(e) => filterChange(e)} />
          <label htmlFor='all'>Все</label>
        </div>
        <div className={styles.item}>
          <input type={'radio'} id='noTransfers' name='testRadio' value={0} onChange={(e) => filterChange(e)} />
          <label htmlFor='noTransfers'>Без пересадок</label>
        </div>
        <div className={styles.item}>
          <input type={'radio'} id='transfer1' name='testRadio' value={1} onChange={(e) => filterChange(e)} />
          <label htmlFor='transfer1'>1 пересадка</label>
        </div>
        <div className={styles.item}>
          <input type={'radio'} id='transfer2' name='testRadio' value={2} onChange={(e) => filterChange(e)} />
          <label htmlFor='transfer2'>2 пересадки</label>
        </div>
        <div className={styles.item}>
          <input type={'radio'} id='transfer3' name='testRadio' value={3} onChange={(e) => filterChange(e)} />
          <label htmlFor='transfer3'>3 пересадки</label>
        </div>
      </div>
    </div>
  )
}

export default Transfers
