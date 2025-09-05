import './App.css'
import Greet from "./components/Greet"
import Heading from './components/Heading'
import Oscar from './components/Oscar'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne',
  // }

  // const persons = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Wally',
  //     last: 'West'
  //   },
  // ]

  return (
    <div className='App'>      
      <Status status='success' />
      <Heading>Place Holder</Heading>
      <Oscar>
        <Heading>Oscar goes to Jennifer Lawrence</Heading>
      </Oscar>
      <Greet name='Kelvin' isLoggedIn={true} />
    </div>
  )
}

export default App
