import {  pull } from 'lodash'
import { ticketsApi } from '../api/api'
const SET_TICKETS = 'SET-TICKETS'
const SET_FILTER = 'SET_FILTER'

const REMOVE_FILTER = 'REMOVE_FILTER'

let InitialState = {
  tickets: null,

  filterStops: -1,
}

const TicketsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_TICKETS: {
      return {
        ...state,
        tickets: action.tickets,
      }
    }
    case SET_FILTER: {
      return {
        ...state,
        filterStops: action.filterStops,
      }
    }
  
    case REMOVE_FILTER: {
      return {
        ...state,
        filterStops: action.filterStops,
      }
    }

    default:
      return state
  }
}

const actions = {
  setTickets: (tickets) => {
    return {
      type: SET_TICKETS,
      tickets,
    }
  },

  setFilter: (filterStops) => {
    return {
      type: SET_FILTER,
      filterStops,
    }
  },


  removeFilter: (filterStops) => {
    return {
      type: REMOVE_FILTER,
      filterStops,
    }
  },
}

export const removeFilterThunk = (filter) => {
  return (dispatch, getState) => {
    let filters = getState().ticketsReducer.filterStops
    let newFilter = pull(filters, filter)
    dispatch(actions.removeFilter(newFilter))
  }
}

export const setTicketsThunk = () => {
  return async (dispatch) => {
    let res = await ticketsApi.getTickets()
    dispatch(actions.setTickets(res.data.tickets))
  }
}

export const setFilterThunk = (filterStops) => {
  return (dispatch, getState) => {
    let filters = getState().ticketsReducer.filterStops
    let newFilter = filterStops
    dispatch(actions.setFilter(filterStops))
  }
}

export default TicketsReducer
