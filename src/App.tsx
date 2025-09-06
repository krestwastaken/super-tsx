import './App.css'
import Button from './components/Button'
import Input from './components/Input'
// import Greet from "./components/Greet"
// import Heading from './components/Heading'
// import Oscar from './components/Oscar'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import Status from './components/Status'

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
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/>
    </div>
  )
}

export default App
