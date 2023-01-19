import { Habit } from './components/Habit'
import './styles/global.css'

function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>

      <Habit
      completed={4}
      />
    </div>
  )
}

export default App
