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
import CountriesGDPPerCapita from './components/CountriesGDPPerCapita'
import CountriesLifeExpectancy from './components/CountriesLifeExpectancy'
import TopLifeExpectancyCountries from './components/TopLifeExpectancyCountries'
import LowestLifeExpectancyCountries from './components/LowestLifeExpectancyCountries'
import CityDetails from './components/CityDetails'
import LargestCities from './components/LargestCities'
import TotalCities from './components/TotalCities'
import CountriesByPopulation from './components/CountriesByPopulation;'
import CountriesLessPopulation from './components/CountriesLessPopulation'

function App() {
  const [count, setCount] = useState();

  return (
    <>

   <Header />
   <TotalPop />
   <TotalContriesCount />
   <AveragePopulation />
  <CountriesByPopulation />
  <CountriesLessPopulation />
   <PopulationByContinent />
   <TopTenPop />

   <TopTenLeastPop />

   <PopulationByCountry />

   <TotalLanguages />
   <TopTenLanguages />



   <CountriesGDPPerCapita />

   <CountriesLifeExpectancy />

   <TopLifeExpectancyCountries />
   <LowestLifeExpectancyCountries />
   <CityDetails />
   <LargestCities />
   <TotalCities />
     </>
  )
}

export default App
