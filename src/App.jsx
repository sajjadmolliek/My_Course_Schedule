import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h1 className='text-center font-bold text-4xl my-10'>Course Registration</h1>
      <hr className='mx-20' />
      {/* Calling the Card Component and import from components folder */}
      <Card></Card>
    </>
  )
}

export default App
