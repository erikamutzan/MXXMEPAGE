import React from "react"
import './App.css'
import MxxxmeNavBar from './components/NavBar/MxxmeNavBar.jsx';
import Onboarding from './page/Onboarding/Onboarding.jsx';

function App() {

  return (
    <>
    <div className='d-flex flex-column h-100'>
      <div className='flex-shrink-0'>
        <MxxxmeNavBar></MxxxmeNavBar>
        <Onboarding></Onboarding> 
      </div>
    </div>
      
    </>
  )
}

export default App
