import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import TopTenPop from './components/TopTenPop'
import TotalPop from './components/TotalPop'
import TotalContriesCount from './components/TotalContriesCount'
import TopTenLeastPop from './components/TopTenLeastPop'
import AveragePopulation from './components/AveragePopulation'
import PopulationByContinent from './components/PopulationByContinent'
import PopulationByCountry from './components/PopulationByCountry'
import TotalLanguages from './components/TotalLanguages'
import TopTenLanguages from './components/TopTenLanguages'

function App() {
  const [count, setCount] = useState();

  return (
    <>

   <Header />
   <TotalPop />
   <TotalContriesCount />
   <AveragePopulation />

   <PopulationByContinent />
   <TopTenPop />

   <TopTenLeastPop />

   <PopulationByCountry />

   <TotalLanguages />
   <TopTenLanguages />


     </>
  )
}

export default App
