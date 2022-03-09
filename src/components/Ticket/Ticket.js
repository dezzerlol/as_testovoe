import styles from './Ticket.module.css'
import React from 'react'
import Loader from '../common/Loader'

const Ticket = (props) => {
  if (!props.ticket) {
    return null
  }

  const getHours = (stringDate) => {
    let d = new Date(stringDate)
    let hours = d.getUTCHours() < 10 ? '0' + d.getUTCHours() : d.getUTCHours()
    let minutes = d.getUTCMinutes() < 10 ? '0' + d.getUTCMinutes() : d.getUTCMinutes()
    return hours + ':' + minutes
  }

  const getStops = (key) => {
    return props.ticket.segments[key].stops.length > 1
      ? props.ticket.segments[key].stops.map((stop) => {
          return stop + ' '
        })
      : props.ticket.segments[key].stops
  }

  const getFlightTime = (value) => {
    let hours = Math.floor(value / 60)
    let minutes = Math.floor(value % 60) < 10 ? '0' + Math.floor(value % 60) : Math.floor(value % 60)
    return hours + 'ч ' + minutes + 'м'
  }

  const getInHours = (timeOut, flightTime) => {
    let d = new Date(timeOut)
    let hoursOut = d.getUTCHours()
    let minutesOut = d.getUTCMinutes()

    let hoursFlightTime = Math.round(flightTime / 60)
    let minutesFlightTime = flightTime % 60

    let outputInHours = hoursOut + hoursFlightTime
    let outputInMinutes = minutesOut + minutesFlightTime

    if (outputInHours > 24) {
      outputInHours = hoursOut + hoursFlightTime - 24
      if (outputInHours > 24) {
        outputInHours = outputInHours - 24
      }
    }
    if (outputInMinutes >= 60) {
      outputInMinutes = minutesOut + minutesFlightTime - 60
    }

    let hours = outputInHours < 10 ? '0' + outputInHours : outputInHours
    let minutes = outputInMinutes < 10 ? '0' + outputInMinutes : outputInMinutes

    return hours + ':' + minutes
  }

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.firstString}>
        <div className={styles.ticketPrice}>{props.ticket.price} Р</div>
        <img src={`https://pics.avs.io/99/36/${props.ticket.carrier}.png`} alt='ticket_carrier_logo' />
      </div>
      <div className={styles.secondString}>
        <div>
          <div className={styles.route}>
            {props.ticket.segments[0].origin} - {props.ticket.segments[0].destination}
          </div>
          <div className={styles.time}>
            {getHours(props.ticket.segments[0].date) + ' - ' + getInHours(props.ticket.segments[0].date, props.ticket.segments[0].duration)}
          </div>
        </div>
        <div>
          <div className={styles.route}>В ПУТИ</div>
          <div className={styles.time}>{getFlightTime(props.ticket.segments[0].duration)}</div>
        </div>
        <div className={styles.flightStops}>
          <div className={styles.route}>{props.ticket.segments[0].stops.length} ПЕРЕСАДКИ</div>
          <div className={styles.time}>{getStops(0)}</div>
        </div>
      </div>
      <div className={styles.thirdString}>
        <div>
          <div className={styles.route}>
            {props.ticket.segments[1].origin} - {props.ticket.segments[1].destination}
          </div>
          <div className={styles.time}>
            {getHours(props.ticket.segments[1].date) + ' - ' + getInHours(props.ticket.segments[1].date, props.ticket.segments[1].duration)}
          </div>
        </div>
        <div>
          <div className={styles.route}>В ПУТИ</div>
          <div className={styles.time}>{getFlightTime(props.ticket.segments[1].duration)}</div>
        </div>
        <div className={styles.flightStops}>
          <div className={styles.route}>{props.ticket.segments[1].stops.length} ПЕРЕСАДКИ</div>
          <div className={styles.time}>{getStops(1)}</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket

