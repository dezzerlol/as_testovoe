import CheapestFastest from './components/Sorting/CheapestFastest'
import Transfers from './components/Sorting/Transfers'
import Ticket from './components/Ticket/Ticket'
import { TicketContainer } from './components/Ticket/TicketContainer'
import logo from './images/Logo.svg'
import styles from './index.module.css'

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.transfers}>
        <Transfers />
      </div>
      <div className={styles.ticketContainer}>
        <div className={styles.tickets}>
          <div>
            <img src={logo} alt='logo' />
          </div>
          <div>
            <CheapestFastest />
          </div>
          <div>
            <TicketContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
