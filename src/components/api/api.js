import axios from 'axios'

export const ticketsApi = {
  getTickets() {
    const getIdAndTickets = async () => {
      const searchId = await axios.get('https://front-test.beta.aviasales.ru/search')
      const res = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.data.searchId}`)
      return res
    }
    return getIdAndTickets()
  },
}
