
import Navbar from './components/Navbar'
import './App.css'
import Greeting from './components/Greeting'
import StudentCard from './components/StudentCard'

function App() {

  return (
    <div>
      <Navbar />

      <Greeting firstName="Harper" />
      <hr />
      <Greeting firstName="Michelle" />
      <hr />
      <Greeting firstName="Andrea" />

      <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB' }} />
      <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: 'DATA' }} />

    </div>
  )
}

export default App
