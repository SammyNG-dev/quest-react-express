import { useState } from 'react'
import './App.css'
import EmployeeCard from './components/EmployeeCard'

function App() {

  const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };
  
  const [employee, setEmployee] = useState(sampleEmployee)

  const getEmployee = () => {
    fetch("http://localhost:3310/api/employees")
    .then((res)=>res.json())
    .then((data)=>{
      setEmployee(data.results[0])})
    .catch((error)=>console.error("Voici l'erreur : " + error))
  }

  

  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type='button' onClick={getEmployee}>Get employee</button>
    </div>
  )
}

export default App