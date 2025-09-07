import './App.css'
// import Button from './components/Button'
// import Input from './components/Input'
// import User from './components/state/User'
// import Greet from "./components/Greet"
// import Heading from './components/Heading'
// import Oscar from './components/Oscar'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import Status from './components/Status'

// import { ThemeContextProvider } from './components/context/ThemeContext'
// import Box from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import User from './components/context/User'

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
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  )
}

export default App
