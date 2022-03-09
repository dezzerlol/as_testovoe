import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/Loader'
import { setTicketsThunk } from '../Redux/TicketsReducer'
import Ticket from './Ticket'
import styles from './Ticket.module.css'
import { sortBy } from 'lodash'

export const TicketContainer = () => {
  const tickets = useSelector((state) => state.ticketsReducer.tickets)
  const filterStops = useSelector((state) => state.ticketsReducer.filterStops)
  const [next, setNext] = useState(5)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTicketsThunk())
  }, [])

  if (!tickets) {
    return <Loader />
  }

  let ticketsSortedByPrice = sortBy(tickets, ['price']).slice(0, next)

  const ticketsOutput = ticketsSortedByPrice.map((ticket) => {
    console.log(ticket.segments[0].stops)
    console.log(filterStops)
    if (Number(filterStops) === -1) {
      return <Ticket ticket={ticket} key={ticket.price} />
    }
    return ticket.segments[0].stops.length === Number(filterStops) ? <Ticket ticket={ticket} key={ticket.price} /> : null
  })
  console.log(ticketsOutput)
  const loadMoreTickets = () => {
    setNext(next + 5)
  }

  return (
    <div className={styles.content}>
      {ticketsOutput}
      <button className={styles.loadMoreButton} onClick={loadMoreTickets}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
