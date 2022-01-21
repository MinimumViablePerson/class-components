import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'

function App () {
  return (
    <div className='App'>
      <FunctionComponent name='Ed' />

      <ClassComponent name='Arita' />
    </div>
  )
}

export default App
