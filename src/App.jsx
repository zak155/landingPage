import ButtonGradient from "./assets/svg/ButtonGradient"

import Hero from "./components/Hero"

import Header from "./components/Header"
import Benefits from "./components/Benefits"
const App=()=> {
 

  return (
    <>
    <h1 className='text-3xl font-bold underline'>
      Hello World
    </h1>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
      
      <Hero/>
      <Benefits/>
    </div>
    
    <ButtonGradient/>
     </>
  )
 
}

export default App
